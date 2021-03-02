const knex = require('../db.js');

knex.schema.createTable('users', table => {
  table.increments();
  table
    .timestamp('created_at')
    .notNull()
    .defaultTo(knex.raw('now()'));
  table.string('username').unique();
  table.string('password')
}).then(()=>{
  console.log('table created');
});
