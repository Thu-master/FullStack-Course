function phuonTrinhBac2(a, b, c) {
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.log("No real roots");
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(`One real root: ${x}`);
  } else {
    // console.log(delta, Math.sqrt(delta));
    // console.log(a, b);
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Two real roots: ${x1} and ${x2}`);
  }
  return [delta, a];
}

// let a = parseInt(prompt("Enter coefficient a:"));
// let b = parseInt(prompt("Enter coefficient b:"));
// let c = parseInt(prompt("Enter coefficient c:"));
//console.log(phuonTrinhBac2(2, 20, 30));

function tinhNamNhuan(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Năm nhuận");
    return [year, true];
  } else {
    console.log("Năm không nhuận");
    return [year, false];
  }
}
// console.log(tinhNamNhuan(2020)); // true
// console.log(tinhNamNhuan(2021)); // false
// console.log(tinhNamNhuan(2000)); // true
// console.log(tinhNamNhuan(1900)); // false
// console.log(tinhNamNhuan(1600)); // true

let inputYear = document.getElementById("year");
if (isNaN(Number(inputYear.value))) {
  alert("Giá trị nhập vào không phải là số");
} else
  inputYear.addEventListener("input", () => {
    console.log(inputYear.value);
  });

let btAdd = document.getElementById("btAdd");
let listAdd = document.querySelector(".list-add");
let array = [];
btAdd.addEventListener("click", () => {
  let year = Number(inputYear.value); // chuyển thành số
  let newElement = document.createElement("p");
  let result = tinhNamNhuan(year)[1] ? "Năm nhuận" : "Năm không nhuận";
  newElement.innerText = "${year}" - "${result}";
  listAdd.appendChild(newElement);

  array.push(year);
  inputYear.value = "";
});

function checkNamNhuan() {
  array.forEach((year) => {
    tinhNamNhuan(year);
  });
}
