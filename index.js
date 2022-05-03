const yaml_config = require('node-yaml-config');

process.env.AMBIENTE = process.argv[2];

const config = yaml_config.load('./config/default.yaml', process.env.AMBIENTE);

console.log(process.env.AMBIENTE);

console.log(config);

console.log('nome_banco: ' + config.database.db);
console.log('cache: ' + config.cache.dir)