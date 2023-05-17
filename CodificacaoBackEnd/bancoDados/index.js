(async () => {
    const db = require("./db");
    console.log('Começou!');

    /*console.log('INSERT INTO clientes');
    const result = await db.insertCustomer({nome: "Zé", idade: 25, uf: "SP"});
    console.log(result.rowCount);*/

    console.log('SELECT * FROM clientes');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE clientes');
    const result2 = await db.updateCustomer(2, {nome: "Márcio", idade: 23, uf: "MG"});
    console.log(result2.rowCount);

    /*console.log('DELETE FROM clientes');
    const result3 = await db.deleteCustomer(1);
    console.log(result3.rowCount);*/
})();