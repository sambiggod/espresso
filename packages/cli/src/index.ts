const { program } = require('commander');

program.version('0.0.1', '-v', '--version').option('-l --log <log>', 'console a log info~', parseInt, 1).parse(process.argv);

console.log('program console: ', program.log)