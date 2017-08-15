<p align="center"><img width="200" src="images/logo.png"></p>

# Brighten

Clear terminal screen but keep output history.

### History

While working on [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin) to improve it for [Next.js](https://github.com/zeit/next.js), I needed to clear the terminal screen without overriding previous output. Using ANSI escapes works for clearing the screen, but it will also override the output that's visible at that moment. So I created this simple solution to clear the screen but keep the history

## Installation

```
npm install --save brighten
```

## Usage

```
const brighten = require('brighten')

// clear screen when process is a TTY
if(process.stdout.isTTY) {
  brighten()
}
```
