#!/usr/bin/env node
// ----------------------------------------------------------------------------

// npm
var npxcard = require('npxcard')

// ----------------------------------------------------------------------------
// setup

const sections = [
  {
    title: 'Eduardo Flores (Personal)',
    details: [
      [ 'Email', 'efloresambrosio@gmail.com' ],
      [ 'Web', 'https://eflores.me' ],
      [ 'Twitter', 'https://twitter.com/ed_fronzec' ],
      [ 'GitHub', 'https://github.com/fronzec' ],
      [ 'GitLab', 'https://gitlab.org/fronzec' ],
    ],
  },
  {
    title: 'Rappi (My Company)',
    details: [
      [ 'Email', 'eflores@rappi.com' ],
      [ 'Web', 'https://rappi.com' ],
      [ 'Twitter', 'https://twitter.com/rappimexico' ]
    ],
  },
  {
    title: 'Node.js / npm',
    details: [
      [ 'Profile', 'https://www.npmjs.com/~fronzec' ],
      [ 'Card', '$ npx fronzec' ],
    ],
  },
]

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections)
console.log(output)

// ----------------------------------------------------------------------------
