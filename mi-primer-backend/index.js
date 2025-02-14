const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());

//ruta principal 
app.get('/', (req, res) => {
    return res.send('HOLA MUNDO!');
});

//endpoint para obtener datos de usuarios

app.get('/api/datos', (req, res) => {
    const datos = {
        name: 'Andres',
        age: 40,
        ciudad: 'La Paz'
    };
    return res.json(datos);
})

//Endpoint con parametros sencillos
app.get('/api/saludo/:name', (req, res) => {
    const name = req.params.name;
    return res.send('Hola, ' + name);
});

//endpoint que suma dos numeros
app.get('/api/suma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = num1 + num2;
    return res.json(
        resultado);
});

//endpoin que resta dos numeros
app.get('/api/resta/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const resultado = num1 - num2
    return res.json(resultado)
});

app.get('/api/multi/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const resultado = num1 * num2
    return res.json(resultado)
});


app.get('/api/div/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    if (num2 === 0) {
        return res.status(400).send('Error: Division por cero')
    }
    else {
        const resultado = num1 / num2
        return res.json(resultado)
    }
})

//endpoint que obtiene un usuario por ID
const users = [
    {
        id: 1,
        name: 'Julio',
        age: 32
    },
    {
        id: 2,
        name: 'Maria',
        age: 28
    },
    {
        id: 3,
        name: 'Carlos',
        age: 30
    }
]
app.get('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if (user) {
        res.json(user)
    }
    else {
        res.status(404).json('Usuario no encontrado')
    }
    //return res.json(id) Por ser doble respuesta NUNCA COMETER ESTE ERROR!!!
})

//Endpoint para nuevo usuario creado
app.post('/api/user', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser)
    res.status(201).json(newUser)
});

//Endpopont para actualizar un usuario
app.put('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex(u => u.id === id)
    if (userIndex != -1) {
        users[userIndex] = {
            id,
            name: req.body.name,
            age: req.body.age
        };
        return res.json(users[userIndex])
    }
    else {
        return res.status(404).json('Usuario no encontrado')
    }
});


//Endpoint Elimina usuario
app.delete('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex(u => u.id === id)
    if (userIndex !== -1) {
        const userDelete = users.splice(userIndex, 1)
        return res.json(userDelete)
    }
    else {
        return res.status(404).json('Usuario no encontrado')
    }
})



// inicio del servidor

app.listen(port, () => {
    console.log('Servidor Corriendo en http://localhost:' + port);
})