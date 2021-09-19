const connection = require('./DataBaseLocalization/dadosEspaciais');
module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('usuario').count();

        const usuario = await connection('usuario')
            .join('usuario.user_cpf')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'usuario.*', 
                'usuario.name',
                'usuario.cpf',
                'usuario.email',
                'usuario.localizacao',
                'usuario.codProduto',
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(usuario);
    },
    async create(request, response){
        const { title, description,value} = request.body;
        const user_cpf = request.headers.authorization;

        const [cpf] = await connection('usuario').insert({
            user_name,
            user_email,
            user_cpf,
            user_localizacao,
            user_codProduto,
        });

        return response.json({ cpf });
    },

    async delete(request, response){
        const { cpf } = request.params;
        const user_cpf = request.headers.authorization;

        const user = await connection('usuario')
            .where('cpf',cpf)
            .select('user_cpf')
            .first();

        if(user.user_cpf != user_cpf){
            return response.status(401).json({ erro: 'Operation not permittes.'});

        }

        await connection('usuario').where('cpf', cpf).delete();

        return response.status(204).send();
    }
};