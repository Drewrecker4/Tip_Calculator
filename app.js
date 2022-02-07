//-------------VARIABLES-------------//

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
let billValueValid;
let tipAmountDisplay;
let totalAmountDisplay;
let tipAmountDollar;
let totalAmountDollar;
let dollar = "$";

//-----------BUTTON-LOGIC------------//

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

//---------INPUT-VALIDATION----------//

const billInput = () => {
  billValue = document.getElementById("bill-value").value;
  //verify input does not have more than 2 decimal places//
  if (/^\d+(\.\d{1,2})?$/.test(billValue)) {
    billValueValid = "true";
  } else {
    billValueValid = "false";
  }
};

document
  .getElementById("bill-value")
  .addEventListener("invalid", function (event) {
    event.preventDefault();
    document.getElementById("bill-input-field").classList.add("bill-invalid");
    document.getElementById("bill-input-field").classList.remove("input-field");
    document.getElementById("bill-zero-error").style.visibility = "visible";
  });

document
  .getElementById("custom-value")
  .addEventListener("invalid", function (event) {
    event.preventDefault();
    document.getElementById("custom-value").classList.add("custom-invalid");
    document.getElementById("custom-value").classList.remove("custom-input");
  });

document.getElementById("person-zero-error").style.visibility = "hidden";
document.getElementById("bill-zero-error").style.visibility = "hidden";

document
  .getElementById("person-value")
  .addEventListener("invalid", function (event) {
    event.preventDefault();
    document
      .getElementById("person-input-field")
      .classList.add("person-invalid");
    document
      .getElementById("person-input-field")
      .classList.remove("input-field");

    document.getElementById("person-zero-error").style.visibility = "visible";
  });

const personInput = () => {
  numberOfPeople = document.getElementById("person-value").value;
  //verify input is a whole number//
  if (/^\d+$/.test(numberOfPeople)) {
    numberOfPeopleValid = "true";
  } else {
    numberOfPeopleValid = "false";
  }
};

//----------RUN-CALCULATOR-----------//

const runTipCalculator = () => {
  //if statement prevents calculator from running until all inputs are satisfied//
  if (
    buttonValue >= 0 &&
    buttonValue <= 100 &&
    billValue > 0 &&
    billValue <= 1000000 &&
    billValueValid === "true" &&
    numberOfPeopleValid === "true" &&
    numberOfPeople > 0 &&
    numberOfPeople <= 100
  ) {
    billAmount = billValue / numberOfPeople;
    tipAmount = (billValue * buttonValue) / numberOfPeople;
    tipAmountDisplay = tipAmount.toFixed(2);
    tipAmountDollar = dollar.concat(tipAmountDisplay);
    totalAmount = billAmount + tipAmount;
    totalAmountDisplay = totalAmount.toFixed(2);
    totalAmountDollar = dollar.concat(totalAmountDisplay);
    document.getElementById("tip-calc").innerHTML = tipAmountDollar;
    document.getElementById("total-calc").innerHTML = totalAmountDollar;
    document.getElementById("tip-placeholder").style.visibility = "hidden";
    document.getElementById("total-placeholder").style.visibility = "hidden";
  } else {
    return;
  }
};

//-----------BUTTON-TOGGLE-----------//

fiveToggle.addEventListener("click", () => {
  latchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
});

tenToggle.addEventListener("click", () => {
  unlatchFive();
  latchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
});

fifteenToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  latchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
});

twentyFiveToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  latchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  runTipCalculator();
});

fiftyToggle.addEventListener("click", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  latchFifty();
  unlatchCustom();
  runTipCalculator();
});

//-----------INPUT-CHANGES-----------//

customToggle.addEventListener("change", () => {
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  latchCustom();
  document.getElementById("custom-value").classList.remove("custom-invalid");
  document.getElementById("custom-value").classList.add("custom-input");
});

billToggle.addEventListener("change", () => {
  billInput();
  document.getElementById("bill-input-field").classList.remove("bill-invalid");
  document.getElementById("bill-input-field").classList.add("input-field");
  document.getElementById("bill-zero-error").style.visibility = "hidden";
});

personToggle.addEventListener("change", () => {
  personInput();
  document
    .getElementById("person-input-field")
    .classList.remove("person-invalid");
  document.getElementById("person-input-field").classList.add("input-field");
  document.getElementById("person-zero-error").style.visibility = "hidden";
});

//-----------RESET-BUTTON------------//

const resetToggle = document.querySelector("#reset-button");

const resetPage = () => {
  buttonValue = 0;
  document.getElementById("tip-calc").innerHTML = "";
  document.getElementById("total-calc").innerHTML = "";
  document.getElementById("tip-placeholder").style.visibility = "visible";
  document.getElementById("total-placeholder").style.visibility = "visible";
  unlatchFive();
  unlatchTen();
  unlatchFifteen();
  unlatchTwentyFive();
  unlatchFifty();
  unlatchCustom();
  document.getElementById("bill-value").value = "";
  document.getElementById("person-value").value = "";
  billInput();
  personInput();
};

resetToggle.addEventListener("click", () => {
  resetPage();
});
