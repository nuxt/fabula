
import { resolve } from 'path'
import consola from 'consola'
import arg from 'arg'
import { runSource } from '../compile'

function resolvePath(path, base = null) {
  if (!base) {
    base = process.cwd()
  }
  return resolve(base, ...path.split('/'))
}

let config

function loadConfig() {
  let rcFile
  for (rcFile in ['.fabularc', '.fabularc.js', 'fabula.js']) {
    if (existsSync(rcFile)) {
      break
    }
    rcFile = null
  }
  if (rcFile === null) {
    throw new Error('Fabula configuration not found.')
  }
  config = require(resolvePath(rcFile))
}

void async function main() {
  const args = arg()
  const source = args._[0]
  await runSource(source, config)
}.catch((err) => {
  consola.fatal(err)
  process.exit()
})
