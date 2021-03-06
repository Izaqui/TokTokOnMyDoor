require('dotenv').config();

const {Client} = require('pg');
const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});

client.connect()
    .then(()=> console.log('Conectado!'))
    .catch(err => console.log(err.stack));

const getUsuarios = (request, response) =>{
    client.query('SELECT * FROM usuario', (error, results) => {
        if(error){
            response.status(400).send(error);
            return;
        }
        response.status(200).json(results.rows);
    });
}
    
const addUsuario = (request, response) =>{
    const {nome,email,localizacao, produto} = request.body;
    
    client.query(`INSERT INTO usuario (nome,email,localizacao,produto) VALUES ($1, $2,$3)`, 
        [nome,email, localizacao,produto],(error, results) =>{
        if(error){
            response.status(400).send(error);
            return;
        }
        response.status(200).send('Usuário inserido!');
    });
};
    
const atualizarUsuario = (request, response) => {
        
    const { nome, email , localizacao, produto} = request.body;
      
    client.query(
        'UPDATE usuario SET nome = $1 WHERE email=$2',
            [nome, email,localizacao,produto],
            (error, results) => {
            if (error) {
                response.status(400).send(error);
                return;
            }
        response.status(200).send('Usuário modificado!');
    });
};
    
const deletarUsuario = (request, response) => {
    const id = parseInt(request.params.id)
      
    client.query('DELETE FROM usuario WHERE email = $1', [email], (error, results) => {
        if (error) {
            response.status(400).send(error);
            return;
        }
        response.status(200).send('Usuário deletado!');
    });
};

module.exports = {
    getUsuarios,
    addUsuario,
    atualizarUsuario,
    deletarUsuario
};