const express = require('express');
const app = express();
const port = 3001;
const connectDB = require('./db');
const User = require('./models/user'); // Corregido: User con mayúscula

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





// Ruta principal
app.get('/', (req, res) => {
    return res.send('HOLA MUNDO!');
});


// Endpoint que obtiene un usuario por ID
app.get('/api/user/:id', async (req, res) => {
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
app.post('/api/user', async (req, res) => {
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

// Inicio del servidor
app.listen(port, () => {
    console.log('Servidor Corriendo en http://localhost:' + port);
});



