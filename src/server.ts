import express from 'express';

const app = express();

app.listen('3333', () =>{
    console.log('started');
})

// rotas

app.get('/users', (req, res)=>{
    return res.json(['usuário1', 'usuário2']);
});

app.post('/users', (req, res)=>{

});

app.post('/users', (req, res)=>{

});

app.post('/users', (req, res)=>{

});
