let names = [" James", " Oscar", " Raffols"];

document.getElementById("names").innerHTML = names;

let addName = () => {
  let newName = prompt("Add another name: ", "");
  names.push(" " + newName); // Add a space before the new name

  document.getElementById("names").innerHTML = names;
};

let spliceNameRemove = () => {
  names.splice(1, 2);

  document.getElementById("names").innerHTML = names;
};

let spliceNameAdd = () => {
  names.splice(1, 0, "Harold", "Butch");

  document.getElementById("names").innerHTML = names;
};

let popName = () => {
  names.pop();

  document.getElementById("names").innerHTML = names;
};

let sortName = () => {
  names.sort();

  document.getElementById("names").innerHTML = names;
};

let getNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; //get a random number inside the array
  document.getElementById("number").innerHTML = randomNumber;

  switch (true) {
    case randomNumber == 1 ||
      randomNumber == 2 ||
      randomNumber == 3 ||
      randomNumber == 4 ||
      randomNumber == 5 ||
      randomNumber == 6 ||
      randomNumber == 7 ||
      randomNumber == 8 ||
      randomNumber == 10:
      document.getElementById("equal").innerHTML = "No it's not equal 9";
      break;

    case randomNumber == 9:
      document.getElementById("equal").innerHTML = "Yes it's equal to 9";
      break;

    default:
      "";
  }

  // The switch (true) syntax is used here to evaluate the case statements as boolean expressions. This is done to check if the expression in each case statement is true or false, based on the comparison between the value of the randomNumber variable and the number specified in the case statement.
};

let numLoops = () => {
  for (let i = 0; i < 10; i++) {
    document.getElementById("getLoops").innerHTML += i; // += to show all the numbers on loop
    if (i == 8) {
      document.getElementById("stopLoops").innerHTML =
        "Loop stop since it reached 8";
      document.getElementById("loopButton").disabled = true;
      document.getElementById("loopButtonP").innerHTML = "Button disabled";

      break;
    }
  }
};

// The event parameter is now being passed to the calB function. This allows us to access the button element that was clicked, and get its innerHTML value.

// Instead of selecting the calcP element and getting its innerHTML value, we're now using the innerHTML value of the button that was clicked (event.target.innerHTML).

// I removed the case for globalP == "0", since it's redundant with the default case. All values of globalP that are not explicitly handled by the case statements will now fall through to the default case.

let calB = (event) => {
  // To access the button element that was clicked, and get its innerHTML value.
  let globalP = event.target.innerHTML; // To get the innerHTML value of the button that was clicked.

  switch (globalP) {
    case "0":
      document.getElementById("clickedNum").innerHTML = 0;
      calcF();
      break;
    case "1":
      document.getElementById("clickedNum").innerHTML = 1;
      calcF();
      break;
    case "2":
      document.getElementById("clickedNum").innerHTML = 2;
      calcF();
      break;
    case "3":
      document.getElementById("clickedNum").innerHTML = 3;
      calcF();
      break;
    case "4":
      document.getElementById("clickedNum").innerHTML = 4;
      calcF();
      break;
    case "5":
      document.getElementById("clickedNum").innerHTML = 5;
      calcF();
      break;
    case "6":
      document.getElementById("clickedNum").innerHTML = 6;
      calcF();
      break;
    case "7":
      document.getElementById("clickedNum").innerHTML = 7;
      calcF();
      break;
    case "8":
      document.getElementById("clickedNum").innerHTML = 8;
      calcF();
      break;
    case "9":
      document.getElementById("clickedNum").innerHTML = 9;
      calcF();
      break;
    default:
      break;
  }
};

let calcF = () => {
  let ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randNumber = ranNum[Math.floor(Math.random() * ranNum.length)]; //get a random number inside the array
  document.getElementById("randomNum").innerHTML =
    "Random Number: " + randNumber;

  if (document.getElementById("clickedNum").innerHTML == randNumber) {
    document.getElementById("result").innerHTML =
      "Congrats you've matched the random number!";
  } else {
    document.getElementById("result").innerHTML = "Try Again!";
  }
};

let inputToDo = [" Wipe Floor", " Wash Dishes"];

document.getElementById("toDoItem").innerHTML = inputToDo;

let toDoButton = () => {
  let inputToDoNew = document.getElementById("inputToDo").value;
  inputToDo.push(" " + inputToDoNew);

  document.getElementById("toDoItem").innerHTML = inputToDo;
};
