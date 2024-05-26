import { speak } from "components";

console.log(speak(["Hello", "monorepo", "world"], "!"));

const p = document.createElement("p");
const text = document.createTextNode(
  speak(["Hello", "monorepo", "world"], "!"),
);

p.appendChild(text);
document.body.appendChild(p);
