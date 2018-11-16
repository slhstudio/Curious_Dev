#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Twitter() {
    opn("https://twitter.com/slhstudio");
  },
  GitHub() {
    opn("https://github.com/slhstudio");
  },
  Website() {
    opn("https://slhstudio.com");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Sarah|Hodges", {
  font: "simple3d",
  lineHeight: 0.5,
  colors: ["candy"]
});

console.log(`Hello! 
I'm Sarah Hodges, a software developer 
(and recovering designer) working 
with front-end technologies. 
I live at the intersection of 
DESIGN && CODE.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to know about me?",
      choices: ["Twitter", "GitHub", "Website", "Quit"]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
  });

//With thanks to Elijah Manor!
