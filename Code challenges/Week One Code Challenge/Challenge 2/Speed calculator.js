//Prompt the user to enter the car speed//
let carSpeed = parseInt(prompt("Enter the speed of the car:"));

const speedLimit = 70;
//Set the car speed limit to be 70km/h//
const kmPerDemeritPoint = 5;
//If speed is above the speed limit, demerit point per 5 km is 1 //
const maxDemeritPoints = 12;
//Maximum demerit points to obtain is 12//

if (carSpeed < speedLimit) {
  //If speed is less than the speed limit, display 'Ok'//
  console.log("Ok");
} else {
  let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  //If speed is higher, perform subtraction of the high speed and the speed limit.Divide the answer by 5 to obtain the nimber of demerit points//

  if (demeritPoints > maxDemeritPoints) {
    //If demerit points are greater than 12, display 'License suspended'//
    console.log("License suspended");
  } else {
    //If they are less than 12, display "Last warning"//
    console.log("Last Warning");
  }
}

console.log(carSpeed);
console.log(demeritPoints);