exports.up = knex => knex.schema.alterTable("contato", (tb) => {
    tb.string("telefone")
})

exports.down = function(knex) {
    return knex.schema.table("contato", function(table){
        table.dropColumn("telefone")
    })
  
};
