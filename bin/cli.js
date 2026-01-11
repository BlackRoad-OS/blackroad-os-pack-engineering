#!/usr/bin/env node
const pack = require('../dist');
console.log('🖤 Engineering & CAD Pack');
console.log('Usage: blackroad-os-pack-engineering <command>');
console.log('Commands: install, configure, status, help');
pack.run(process.argv.slice(2));
