
exports.up = function(knex) {
    return knex.schema.createTable('userController',function (table) {
        table.string('name').notNullable();
        table.string('email').primary();
        table.string('password').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('userController');
};
