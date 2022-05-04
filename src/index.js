const yaml_config = require('node-yaml-config');

const criarBrancoDados = require('./data/criarBrancoDados');
const salvarUsuario = require('./data/salvarUsuario');
const Usuario = require('./model/Usuario');

process.env.AMBIENTE = psrocess.argv[2];

var config = yaml_config.load('src/config/default.yaml', process.env.AMBIENTE);

init();


async function init() {
    await criarBrancoDados();
    
    user1 = new Usuario('Gustavo', 'gusta@gmail.com', 'gusta.alves', 'root');
    await salvarUsuario(user1);
    console.log(`Ambiente: ${config.ambiente}`);

}