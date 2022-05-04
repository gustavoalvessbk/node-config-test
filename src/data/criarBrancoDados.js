const yaml_config = require('node-yaml-config');
const conexao = require('mysql2');

module.exports = async function criarBancoDados() {
    const config = yaml_config.load('./src/config/default.yaml', process.env.AMBIENTE);

    const pegarConexao = conexao.createConnection({
        host: config.database.mysql_host,
        user: config.database.mysql_user,
        password: config.database.mysql_pass,
        database: config.database.mysql_schema
    })

    const sql = `CREATE TABLE IF NOT EXISTS T_USUARIO (
                    ID INT AUTO_INCREMENT PRIMARY KEY, 
                    NOME VARCHAR(80) NOT NULL,
                    EMAIL VARCHAR(100) NOT NULL,
                    LOGIN VARCHAR(20) NOT NULL,
                    SENHA VARCHAR(30) NOT NULL
                )`;

    await new Promise((res, rej) => {

        pegarConexao.query(sql, (erro, resultado) => {
            if (erro) {
                rej(`Erro ao logar no banco de dados -> ${erro}`);
            } else {
                console.log(resultado);
                res(true);
                console.log('Tabela usuario criada!');
            }
        });
    });

    pegarConexao.close();
}