const express = require('express');
const app = express();
const port = 3001;
const connectDB = require('./db');
const User = require('./models/user'); // Corregido: User con mayúscula
const { body, validationResult } = require('express-validator');
require('dotenv').config()

connectDB();
app.use(express.json()); // Middleware



//generador automatico de ID unico
let lastId = 0

const generateId = async () => {
    const lastUser = await User.findOne().sort({
        id: -1
    });
    return lastUser ? lastUser.id + 1 : 1;
};

//primer Middleware (registro de Hora,Metodo,y URL)
//app.use((req, res, next) => {
//    console.log('[${new Date().toISOString()}] ${req.method} ${req.url}');
//    next();
//})




//Middleware de Logs
const fs = require('fs');
const path = require('path');

const loggingMiddleware = (req, res, next) => {
    const logFilePath = path.join(__dirname, 'log.txt');
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

    console.log('Middleware de logging ejecutado'); // Verifica que el middleware se ejecute
    console.log('Ruta del archivo de log:', logFilePath); // Verifica la ruta del archivo

    // Escribe el mensaje en el archivo log.txt
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de log:', err);
        }
    });

    next(); // Pasa la solicitud al siguiente middleware o ruta
};

app.use(loggingMiddleware);

//Middleware de autenticacion
const autenticado = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || token !== process.env.TOKEN_SECRETO) {
        return res.status(401).json({ mensaje: 'Acceso no autorizado' });
    }
    next();
};

// Ruta principal
app.get('/', (req, res) => {
    return res.send('HOLA MUNDO!');
});


// Endpoint que obtiene un usuario por ID
app.get('/api/user/:id', autenticado, async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).json('Usuario no encontrado');
        }
        const userResponse = user.toObject();
        delete userResponse._id;
        delete userResponse.__v;
        return res.json(userResponse);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// Endpoint para CREAR nuevo usuario
app.post('/api/user',
    [
        body('name').notEmpty().withMessage('El nombre es obligatorio'),
        body('age').isInt().withMessage('La edad debe ser un numero positivo'),
        body('city').notEmpty().withMessage('La ciudad es obligatoria'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        try {
            const newUser = new User({
                id: await generateId(),
                name: req.body.name,
                age: req.body.age,
                city: req.body.city,
            });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

// Endpoint para actualizar un usuario
app.put('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ id: req.params.id },
            req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).json('Usuario no encontrado');
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint para eliminar usuario
app.delete('/api/user/:id', async (req, res) => {
    try {
        const usuario = await User.findOneAndDelete({ id: req.params.id });
        if (!usuario) {
            return res.status(404).json('Usuario no encontrado');
        }
        res.json({ mensaje: 'Usuario eliminado' }); // Corregido: Usar llaves {}
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ mensaje: 'Algo salio mal en el servidor' })
});




// Inicio del servidor
app.listen(port, () => {
    console.log('Servidor Corriendo en http://localhost:' + port);
});



