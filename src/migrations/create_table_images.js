const knex = require('../db.js');

knex.schema.createTable('images', table => {
  table.string('uuid').primary();
  table
    .timestamp('created_at')
    .notNull()
    .defaultTo(knex.raw('now()'));
  table.string('image')
  table.integer('userId').references('id').inTable('users');

}).then(()=>{
  console.log('table created');
});
