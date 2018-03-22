import chalk from 'chalk'
import { SayHello } from './Greeter'
function main () {
  const message = chalk.bgCyan.black(SayHello())
  console.log(message)
}

main()
