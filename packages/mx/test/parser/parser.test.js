const test = require('ava')
const parse = require('./parse')

test('parse single tag', t => {
  const code = `
  div
  `
  t.snapshot(parse(code))
})

test('parse indent and dedent', t => {
  const code = `
  body
    header
      h1
    section
      div
      p
    footer
  `
  t.snapshot(parse(code))
})

test('ignore empty lines', t => {
  const code = `
  body
    div
` + '\n' +
`      h1
` + '      \n' +
`    footer
  `
  t.snapshot(parse(code))
})

test('parse attributes', t => {
  const code = `
  div id="code" class="cool"
  `
  t.snapshot(parse(code))
})

test('parse attributes with children', t => {
  const code = `
  div id="code"
    p
  `
  t.snapshot(parse(code))
})

test('parse tag with content', t => {
  const code = `
  p Beware of dragons 🔥
  `
  t.snapshot(parse(code))
})

test('parse attributes with content', t => {
  const code = `
  div class="hi" Hello world!
  `
  t.snapshot(parse(code))
})

test('parse tag with block of text', t => {
  const code = `
  div
    p.
      Beware of dragons

      Dragons are very dangerous creatures,
      They live in a caves in the mountains.
    footer
  `
  t.snapshot(parse(code))
})