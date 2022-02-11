// 10.02.22 - Bar chart, using MVC pattern
"use strict";

window.addEventListener("load", setUp);

const dataArray = [8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30, 7, 3, 6, 3, 19, 29, 15, 2, 8];
const bar = document.querySelectorAll(".bar");
let counter = 0;

function setUp() {
  console.log("setup");
  // setting a delay for 1 sec
  setTimeout(loop, 1000);
}

function loop() {
  // to be able to use the random number generated in the getRandomNumberOfCustomers, we need to store it to a variable
  const queueSize = getRandomNumberOfCustomers();

  if (counter < 40) {
    // so if the counter is less than 40, add a random element from queueSize to the beginning of the array
    dataArray.unshift(queueSize);
    // the counter is adding up
    counter++;
    updateBars();
  } else {
    // else add one to the counter and set the array.lengt to 40 (showing no more than 40 bars)
    counter++;
    dataArray.length = 40;
    dataArray.unshift(queueSize);
    updateBars();
  }
  console.log(dataArray);
  setUp();
}

function updateBars() {
  console.log("updateBars");

  // setting the iterator to 0, if the iterator is less than 40, add one to the iterator
  for (let iterator = 0; iterator < 40; iterator++) {
    // updating the textContent for the iterator, from the dataArray
    bar.textContent = dataArray[iterator];
    bar[iterator].style.height = `${dataArray[iterator]}%`;
  }
}

function getRandomNumberOfCustomers() {
  // get your random number of customers from the array
  return Math.floor(Math.random() * 32);
}
