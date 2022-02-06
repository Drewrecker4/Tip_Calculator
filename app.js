const fiveToggle = document.querySelector("#five-percent");
const tenToggle = document.querySelector("#ten-percent");
const fifteenToggle = document.querySelector("#fifteen-percent");
const twentyFiveToggle = document.querySelector("#twenty-five-percent");
const fiftyToggle = document.querySelector("#fifty-percent");
const customToggle = document.querySelector("#custom-value");
const billToggle = document.querySelector("#bill-value");
const personToggle = document.querySelector("#person-value");

let buttonValue = 0;
let billValue;
let billAmount;
let numberOfPeople;
let tipAmount;
let totalAmount;

const latchFive = () => {
  document.getElementById("five-percent").classList.add("latch-button");
  document.getElementById("five-percent").classList.remove("button-percent");
  buttonValue = 0.05;
};

const unlatchFive = () => {
  document.getElementById("five-percent").classList.remove("latch-button");
  document.getElementById("five-percent").classList.add("button-percent");
};

const latchTen = () => {
  document.getElementById("ten-percent").classList.add("latch-button");
  document.getElementById("ten-percent").classList.remove("button-percent");
  buttonValue = 0.1;
};

const unlatchTen = () => {
  document.getElementById("ten-percent").classList.remove("latch-button");
  document.getElementById("ten-percent").classList.add("button-percent");
};

const latchFifteen = () => {
  document.getElementById("fifteen-percent").classList.add("latch-button");
  document.getElementById("fifteen-percent").classList.remove("button-percent");
  buttonValue = 0.15;
};

const unlatchFifteen = () => {
  document.getElementById("fifteen-percent").classList.remove("latch-button");
  document.getElementById("fifteen-percent").classList.add("button-percent");
};

const latchTwentyFive = () => {
  document.getElementById("twenty-five-percent").classList.add("latch-button");
  document
    .getElementById("twenty-five-percent")
    .classList.remove("button-percent");
  buttonValue = 0.25;
};

const unlatchTwentyFive = () => {
  document
    .getElementById("twenty-five-percent")
    .classList.remove("latch-button");
  document
    .getElementById("twenty-five-percent")
    .classList.add("button-percent");
};

const latchFifty = () => {
  document.getElementById("fifty-percent").classList.add("latch-button");
  document.getElementById("fifty-percent").classList.remove("button-percent");
  buttonValue = 0.5;
};

const unlatchFifty = () => {
  document.getElementById("fifty-percent").classList.remove("latch-button");
  document.getElementById("fifty-percent").classList.add("button-percent");
};

const latchCustom = () => {
  buttonValue = document.getElementById("custom-value").value / 100;
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
};

const unlatchCustom = () => {
  document.getElementById("custom-value").value = "";
};

const billInput = () => {
  billValue = document.getElementById("bill-value").value;
};

const personInput = () => {
  numberOfPeople = document.getElementById("person-value").value;
};

const validateForm = () => {
  if (billValue > 0 && billValue <= 100) {
    runTipCalculator();
  } else {
    return;
  }
};

const runTipCalculator = () => {
  if (
    buttonValue > 0 &&
    buttonValue <= 100 &&
    billValue > 0 &&
    billValue <= 1000000 &&
    numberOfPeople > 0 &&
    numberOfPeople <= 100
  ) {
    billAmount = billValue / numberOfPeople;
    tipAmount = (billValue * buttonValue) / numberOfPeople;
    totalAmount = billAmount + tipAmount;
    document.getElementById("tip-calc").innerHTML = tipAmount;
    document.getElementById("total-calc").innerHTML = totalAmount;
    document.getElementById("tip-placeholder").style.visibility = "hidden";
    document.getElementById("total-placeholder").style.visibility = "hidden";
    document.getElementById("test1").innerHTML = totalAmount;
    document.getElementById("test2").innerHTML = tipAmount;
    document.getElementById("test3").innerHTML = buttonValue;
    document.getElementById("test4").innerHTML = billValue;
    document.getElementById("test5").innerHTML = numberOfPeople;
  } else {
    return;
  }
};

/*
const getCustomValue = () => {  
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
};*/

fiveToggle.addEventListener("click", () => {
  latchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

tenToggle.addEventListener("click", () => {
  unlatchFive();
  latchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

fifteenToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  latchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

twentyFiveToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  latchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

fiftyToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  latchFifty();
  unlatchCustom();
  runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

customToggle.addEventListener("change", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  latchCustom();
  //runTipCalculator();
  //document.getElementById("test").innerHTML = buttonValue;
});

billToggle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    //runTipCalculator();
    billInput();
  } else {
    return;
  }
});

personToggle.addEventListener("change", () => {
  // if (e.key === "Enter") {
  //runTipCalculator();
  personInput();

  // } else {
  //   return;
  //  }
});
