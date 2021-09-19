const servico = require('../index')

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('usuario').count();

        const usuario = await connection('usuario')
            .join('usuario.user_cliente')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'usuario.*', 
                'usuario.cliente',
                'usuario.produto',
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(usuario);
    },
    async create(request, response){
        const { title, description,value} = request.body;
        const user_cliente = request.headers.authorization;

        const [cliente] = await connection('usuario').insert({
            user_cliente,
            user_produto,
        });

        return response.json({ cliente });
    },

    async delete(request, response){
        const { cliente } = request.params;
        const user_cliente = request.headers.authorization;

        const user = await connection('usuario')
            .where('cliente',cliente)
            .select('user_cliente')
            .first();

        if(user.user_cliente != user_cliente){
            return response.status(401).json({ erro: 'Operation not permittes.'});

        }

        await connection('usuario').where('cliente', cliente).delete();

        return response.status(204).send();
    }
};