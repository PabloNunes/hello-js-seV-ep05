const pessoas = [
    { idcontato: 1, nomecontato: "Luiz", telefone:"123456789"},
    { idcontato: 2, nomecontato: "Karla", telefone:"987876142"},
    { idcontato: 3, nomecontato: "Marco", telefone:"987654321"}
]



exports.up = knex => knex("contato").insert(pessoas)

exports.down = knex => knex("contato").del().whereIn("idcontato", contato.map(e=>e.idcontato))
