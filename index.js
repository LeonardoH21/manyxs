const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/dados', (req, res) => {
    res.json({ mensagem: 'Aqui estão os dados!' });
});

app.post('/api/inserir-dados', (req, res) => {
    // Lógica para inserir dados aqui
    res.send('Dados inseridos com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
