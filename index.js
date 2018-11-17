#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  GitHub() {
    opn("https://github.com/slhstudio");
  },
  Twitter() {
    opn("https://twitter.com/slhstudio");
  },
  Website() {
    opn("https://slhstudio.com");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Sarah|Hodges", {
  font: "chrome",
  lineHeight: 0.5,
  colors: ["magenta", "white", "magentaBright"]
});

console.log(`Hello! I am a software developer 
(and recovering designer) focusing on 
front-end web technologies. I live at 
the intersection of DESIGN && CODE.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "What else would you like to know about me?",
      choices: ["GitHub", "Twitter", "Website", "Quit"]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
  });
