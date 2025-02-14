const express = require('express');
const app = express();
const port = 3001;

//ruta principal 
app.get('/', (req, res) => {
    res.send('HOLA MUNDO!');
});

//endpoint para obtener datos de usuarios

app.get('/api/datos', (req, res) => {
    const datos = {
        nombre: 'Andres',
        edad: 40,
        ciudad: 'La Paz'
    };
    res.json(datos);
})

//Endpoint con parametros sencillos
app.get('/api/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send('Hola, ' + nombre);
});

//endpoint que suma dos numeros
app.get('/api/suma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = num1 + num2;
    res.json(
        resultado);
});

//endpoin que resta dos numeros
app.get('/api/resta/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const resultado = num1 - num2
    res.json(resultado)
});

app.get('/api/multi/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const resultado = num1 * num2
    res.json(resultado)
});


app.get('/api/div/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    if (num2 === 0) {
        res.status(400).send('Error: Division por cero')
    }
    else {
        const resultado = num1 / num2
        res.json(resultado)
    }
})


// inicio del servidor

app.listen(port, () => {
    console.log('Servidor Corriendo en http://localhost:' + port);
})