const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red text!";
// redText.classList.add("red");

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "Hey I'm a blue h3!";
// blueH3.classList.add("blue");

const div = document.createElement("div");
// div.setAttribute("style", "border: 2px solid black; background-color: pink;");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
const p = document.createElement("p");
p.textContent = "ME TOO!";
div.append(h1, p);

container.append(redText, blueH3, div);

