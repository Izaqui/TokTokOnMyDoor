const connection = require('../DataBaseUser/connection');
const crypto = require('crypto');
module.exports = {
    async index (require, response){
        const ongs = await connection('usuario').select('*');
        return response.json(ongs);
    },
    async create(request, response){
        const { name, email, password } = request.body;

    const user_email = crypto.randomBytes(4).toString('HEX');

    await connection('usuario').insert({
        name,
        email,
        password,//para monitoramento apenas
    })
    return response.json({ email });
    }
};