#!/usr/bin/env node

const meow = require("meow");
const gitCopyHistory = require(".");

const cli = meow(
  `
    Usage
      $ git-copy-history from <source> [options]
 
    Options
      --author          
      --secret          String to crypt hashes. If you too paranoid.
      
    Example
      $ git-copy-history from ../my-project
      $ git-copy-history from ../my-project --author="Pavel Frankov"
      $ git-copy-history from ../my-project --secret="every time must be the same"
`,
  {
    flags: {}
  }
);

const [command, source] = cli.input;

gitCopyHistory(command, source, cli.flags);
