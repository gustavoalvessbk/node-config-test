const yaml_config = require('node-yaml-config');
const conexao = require('mysql2');

module.exports = async function salvarUsuario(usuario) {
    const config = yaml_config.load('./src/config/default.yaml', process.env.AMBIENTE);

    const pegarConexao = conexao.createConnection({
        host: config.database.mysql_host,
        user: config.database.mysql_user,
        password: config.database.mysql_pass,
        database: config.database.mysql_schema
    })

    const { nome, email, login, _senha } = usuario;

    const sql = `INSERT INTO T_USUARIO set ?`;

    await new Promise((res, rej) => {

        pegarConexao.query(sql, usuario, (erro, resultado) => {
            if (erro) {
                rej(`Erro ao logar no banco de dados -> ${erro}`);
            } else {
                console.log(resultado);
                res(true);
                console.log(`Usuário salvo com id: ${resultado.insertId}`);
            }
        });
    });
    pegarConexao.close();

}