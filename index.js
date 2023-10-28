"use strict";

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const arrow = document.querySelector(".arrow-img");
const result = document.getElementById("result");

console.log(result);

arrow.addEventListener("click", function () {
  if (height.value === "") {
    result.innerHTML = `enter a vaild height`;
    result.style.color = "red";
    return;
  }

  if (weight.value === "") {
    result.innerHTML = `enter a vaild weight`;
    result.style.color = "red";
    return;
  }

  let bmi = 0;

  if (height.value > 10) {
    bmi = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
    console.log(bmi);
  } else {
    bmi = (
      weight.value /
      ((height.value * 30.48 * height.value * 30.48) / 10000)
    ).toFixed(2);
  }
  if (bmi < 18.5) {
    result.innerHTML = `your bmi is ${bmi} and you are underweight`;
  } else if (bmi >= 18.5 && bmi <= 25) {
    result.innerHTML = `your bmi is ${bmi} and you are normal weight`;
  } else if (bmi >= 25 && bmi <= 30) {
    result.innerHTML = `your bmi is ${bmi} and you are overweight`;
  } else {
    result.innerHTML = `your bmi is ${bmi} and you are obese`;
  }
});
