
exports.up = function (knex) {
    return knex.schema
        .createTable('user', function (table) {
            table.increments('id').primary();
            table.string('first_name', 255).nullable();
            table.string('last_name', 255).nullable();
            table.string('username', 255).notNullable();
            table.string('insta_profile_picture', 255).nullable();
            table.string('insta_full_name', 255).nullable();
            table.string('insta_user_name', 255).nullable();
            table.string('email', 255).notNullable();
            table.string('insta_id', 255).nullable();
            table.string('facebook_display_name', 255).nullable();
            table.string('facebook_id', 255).nullable();
            table.index(['username'], 'username_idx');
            table.index(['email'], 'email_idx');
        })
        .createTable('triplog', function (table) {
            table.increments('id').primary();
            table.integer('user_id').notNullable().references('id').inTable('user');
            table.string('location_name', 255).notNullable();
            table.string('country', 255).notNullable();
            table.decimal('lat').notNullable();
            table.decimal('lng').notNullable();
        });



};

exports.down = function (knex) {
    { return knex.schema
        .dropTable("triplog")
        .dropTable("user"); }; 
};
