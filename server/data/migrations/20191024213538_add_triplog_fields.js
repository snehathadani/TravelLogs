
exports.up = function(knex) {
    return knex.schema.table('triplog', function(table) {
        table.string('description').notNull().defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.table('triplog', function(t) {
        t.dropColumn('description');
    });
};
