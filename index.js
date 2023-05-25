const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require ('./lib/shapes')
const fs = require('fs');


function writeToFile(fileName, res){
  let svg = "";
  svg =
    '<svg version="1.1" width="700" height="500" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";
  svg += `${res.shape}`;
  
  
  
  
  
  
  let shapeChoice;
  if (res.shape === "triangle") {
    shapeChoice = new Triangle();
    svg += ` <polygon points="150, 18 244, 182 56, 182" fill="${res.backColor}"/> 
    `;
  } else if (res.shape === "square") {
    shapeChoice = new Square();
    svg += ` <rect x="73" y="40" width="160" height="160" fill="${res.backColor}"/>
    `;
  } else if (res.shape === "circle") {
    shapeChoice = new Circle();
    svg += ` <circle cx="150" cy="115" r="80" fill="${res.backColor}"/>
    `;
  }
  
  svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${res.color}">${res.text}</text>`;
  
  // Closing </g> tag
  svg += "</g>";
  // Closing </svg> tag
  svg += "</svg>";
  
  console.log(res.color);
  console.log(res.backColor);
  console.log(res.shape);

  fs.writeFile(fileName, svg, (err) => {
    err ? console.log(err) : console.log("generated logo");
  });
}

function userPrompt(){

  inquirer
    .prompt([
      {
        type: "list",
        message: "What shape would you like to use?",
        name: "shape",
        choices: ["square", "triangle", "circle"],
      },
      {
        type: "list",
        message: "What color would you like your text ?",
        name: "color",
        choices: ["red", "blue", "green", "white" ],
      },
       { type: "list",
        message: "What color background would you like to ?",
        name: "backColor",
        choices: ["red", "blue", "green","black" ],
      },
      
      {
        type: "input",
        message: "What what 3 letters would you like to display?",
        name: "text"
      },
  
    ]).then((res)=> {   
      writeToFile("logo.svg", res);

    })
}
  userPrompt();




