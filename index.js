#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
import open from "open";
import inquirer from "inquirer";

const log = console.log;

const QUERYS = [
  {
    name: "url",
    type: "list",
    message: "You want to see... ❤❤❤",
    choices: ["Github", "Twitter", "LinkedIn", "Quit"],
  },
];

const URLS_MAP = {
  Github: "https://github.com/angelovelandia",
  Twitter: "https://twitter.com/avcodev",
  LinkedIn: "https://www.linkedin.com/in/angelo-velandia-703438237/",
};

const queryParams = () => {
  return inquirer.prompt(QUERYS);
};

const initProject = async (data) => {
  if (data.url) {
    let url = URLS_MAP[data.url];
    if (url) open(url);
    if (!url) process.exit();
    initListConsole();
  }
  return true;
};

const initConsole = async (text) => {
  log(
    chalk.bold.cyan(
      figlet.textSync(text, {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

const initListConsole = async () => {
  const data = await queryParams();
  await initProject(data);
};

const start = async () => {
  initConsole("@AVCODEV");
  await initListConsole();
};

start();
