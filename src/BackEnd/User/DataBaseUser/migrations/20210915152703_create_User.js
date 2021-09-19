
exports.up = function(knex) {
    return knex.schema.createTable('user',function (table) {
        table.string('cpf').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.string('bairro').notNullable();
        table.string('rua',2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };
  