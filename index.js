const readline = require('readline')
module.exports = () => {
    // Fill screen with blank lines. Then move to 0 (beginning of visible part) and clear it
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
}
