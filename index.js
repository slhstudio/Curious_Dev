//With thanks to Elijah Manor!
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

cfonts.say("Sarah Hodges", {
  font: "simple3d",
  colors: ["candy"]
});

console.log(`Hello! 
My name is Sarah Hodges.
I am a software engineer 
(and recovering designer) working 
with front-end technologies. 
I live at the intersection of 
design and code.
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
