import chalk from "chalk";

const log = console.log;

log(chalk.rgb(232, 52, 235)('What ') 
+ chalk.cyanBright('is ') 
+ chalk.yellowBright('the ') 
+ chalk.blueBright('strongest ') 
+ chalk.hex('#FFA500')('animal ') 
+ chalk.magentaBright('in ') 
+ chalk.magenta('the ') 
+ chalk.green('sea') 
+ chalk.red('? ')
+ chalk.whiteBright('Mussels')
+ chalk.grey('.'));


