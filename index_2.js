require('dotenv').config({ path: './config/.env' });

process.env.NODE_CONFIG_ENV = process.argv[2];

process.env.NODE_ENV = process.env.AMBIENTE;
const config = require('config');

console.log(process.argv)


let BIBLIOTECA_THIAGO = node-yml-config

// 
console.log('NODE_CONFIG_ENV: ' + config.util.getEnv('NODE_CONFIG_ENV')); //retorna variável de ambiente 

console.log(`${process.env.OS}_${process.env.COMPUTERNAME}`)

console.log(`${config.get('Database.user')} - ${config.get('Database.password')}`);
console.log(config.get('Database'));


// Observações: Para ler o arquivo .yml/.yaml é necessário baixar o modulo js-yaml
