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

//***********************************************************************************
function giaiPhuongTrinh() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const type = document.getElementById("type").value;
  const resultDiv = document.getElementById("result");

  if (type === "1") {
    // Phương trình bậc 1: ax + b = 0
    if (a === 0) {
      if (b === 0) {
        resultDiv.textContent = "Phương trình vô số nghiệm.";
      } else {
        resultDiv.textContent = "Phương trình vô nghiệm.";
      }
    } else {
      const x = -b / a;
      resultDiv.textContent = `Nghiệm của phương trình là x = ${x}`;
    }
  } else {
    // Phương trình bậc 2: ax.x + bx + c = 0
    if (a === 0) {
      resultDiv.textContent =
        "Đây không phải phương trình bậc 2 (a phải khác 0).";
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      resultDiv.textContent = "Phương trình vô nghiệm";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      resultDiv.textContent = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultDiv.textContent = `Phương trình có 2 nghiệm: x₁ = ${x1}, x₂ = ${x2}`;
    }
  }
}

//***********************************************************************************
let inputYear = document.getElementById("year");
let inputDate = document.getElementById("date");
let btAddYear = document.getElementById("btAddYear");
let btAddDate = document.getElementById("btAddDate");
let listAdd = document.querySelector(".list-add");
let array = [];

btAddYear.addEventListener("click", () => {
  let year = Number(inputYear.value);
  if (!isNaN(year) && inputYear.value.trim() !== "" && year > 1800) {
    addYearResult(year);
    inputYear.value = "";
  } else {
    alert("Giá trị nhập vào không phải là số");
  }
});

btAddDate.addEventListener("click", () => {
  let dateParts = inputDate.value.split("/");

  if (dateParts.length === 3) {
    let day = Number(dateParts[0]);
    let month = Number(dateParts[1]);
    let year = Number(dateParts[2]);

    if (
      !isNaN(day) &&
      !isNaN(month) &&
      !isNaN(year) &&
      month > 0 &&
      month <= 12 &&
      year > 1800
    ) {
      let [nam, isLeap] = tinhNamNhuan(year);
      let daysInMonth = tinhThang(month, isLeap);
      if (day > 0 || day <= daysInMonth) {
        let newElement = document.createElement("p");
        newElement.innerText = `Tháng ${month}: ${daysInMonth} ngày - ${getYearResult(
          year
        )}`;
        listAdd.appendChild(newElement);
        array.push(year);
        inputDate.value = "";
      } else {
        alert(`Ngày không hợp lệ, tháng ${month} chỉ có ${daysInMonth} ngày!`);
      }
    } else {
      alert("Ngày/tháng/năm không hợp lệ!");
    }
  } else {
    alert("Vui lòng nhập đúng định dạng DD/MM/YYYY");
  }
});

function getYearResult(year) {
  let result = tinhNamNhuan(year)[1] ? "Năm nhuận" : "Năm không nhuận";
  return `${year}: ${result}`;
}

function addYearResult(year) {
  let newElement = document.createElement("p");
  let result = tinhNamNhuan(year)[1] ? "Năm nhuận" : "Năm không nhuận";
  newElement.innerText = `${year} - ${result}`;
  listAdd.appendChild(newElement);
  array.push(year);
}

function tinhNamNhuan(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // console.log("Năm nhuận");
    return [year, true];
  } else {
    // console.log("Năm không nhuận");
    return [year, false];
  }
}
// console.log(tinhNamNhuan(2020)); // true
// console.log(tinhNamNhuan(2021)); // false
// console.log(tinhNamNhuan(2000)); // true
// console.log(tinhNamNhuan(1900)); // false
// console.log(tinhNamNhuan(1600)); // true

function tinhThang(month, isLeap) {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) return isLeap ? 29 : 28;
  return "Tháng không hợp lệ";
}

//****************************************************************************************
inputYear.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btAddYear.click();
    inputDate.focus();
  }
  if (e.key === "ArrowDown") {
    inputDate.focus();
  }
});

inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btAddDate.click();
  }
  if (e.key === "ArrowUp") {
    inputYear.focus();
  }
});
