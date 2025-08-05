let vanBan = document.querySelector(".van-ban").textContent.trim();
let tuArray = vanBan.split(" ");
let input = document.querySelector(".o-nhap");
let ketQua = document.querySelector(".ket-qua");
let lamLai = document.querySelector(".lam-lai");
let thoiGian = document.querySelector(".thoi-gian");

let index = 0;
let dung = 0;
let sai = 0;
let timeLeft = 60;
let demNguocDaChay = false;
let interval;
let danhGia = [];

renderVanBan();

function renderVanBan() {
  let html = tuArray
    .map((tu, i) => {
      if (i < index) {
        return `<span style="color: ${
          danhGia[i] ? "green" : "red"
        }">${tu}</span>`;
      } else if (i === index) {
        return `<span style="color: blue; text-decoration: underline">${tu}</span>`;
      } else {
        return tu;
      }
    })
    .join(" ");

  document.querySelector(".van-ban").innerHTML = html;
}

function startCountdown() {
  interval = setInterval(() => {
    timeLeft--;
    thoiGian.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      input.disabled = true;
      ketQua.innerHTML = `<p style="color:#ff3366; font-weight:bold;">Hết giờ!</p>
                          <p>Đúng: <strong>${dung}</strong></p>
                          <p>Sai: <strong>${sai}</strong></p>`;
    }
  }, 1000);
}

// Ngăn Enter và Space không thêm khoảng trắng thừa
input.addEventListener("keydown", function (e) {
  if (!demNguocDaChay) {
    startCountdown();
    demNguocDaChay = true;
  }

  if (e.code === "Enter" || e.code === "Space") {
    e.preventDefault();
  }
});

// Xử lý xác nhận từ khi nhấn Space hoặc Enter (keyup)
input.addEventListener("keyup", function (e) {
  if (e.code === "Space" || e.code === "Enter") {
    let tuNhap = input.value.trim();
    let tuDung = tuArray[index];

    if (tuNhap === tuDung) {
      dung++;
      danhGia[index] = true;
    } else {
      sai++;
      danhGia[index] = false;
    }

    index++;

    input.value = "";
    input.focus();

    renderVanBan();

    if (index >= tuArray.length) {
      clearInterval(interval);
      input.disabled = true;
      ketQua.innerHTML = `<p> Đúng: <strong>${dung}</strong></p>
                          <p> Sai: <strong>${sai}</strong></p>`;
    }
  }
});

lamLai.addEventListener("click", () => {
  location.reload();
});

// Hiệu ứng bàn phím ảo (không thay đổi)
document.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();
  const allKeys = document.querySelectorAll(".key");

  allKeys.forEach((el) => {
    if (el.textContent === key) {
      el.classList.add("active");
    }

    const specialChar = el.textContent;
    if (
      (specialChar === "," && e.key === ",") ||
      (specialChar === "." && e.key === ".") ||
      (specialChar === "!" && e.key === "!") ||
      (specialChar === "?" && e.key === "?") ||
      (specialChar === "@" && e.key === "@") ||
      (specialChar === "#" && e.key === "#") ||
      (specialChar === "$" && e.key === "$") ||
      (specialChar === "%" && e.key === "%") ||
      (specialChar === "&" && e.key === "&") ||
      (specialChar === "*" && e.key === "*")
    ) {
      el.classList.add("active");
    }
  });
});

document.addEventListener("keyup", function (e) {
  const key = e.key.toUpperCase();
  const allKeys = document.querySelectorAll(".key");

  allKeys.forEach((el) => {
    if (el.textContent === key) {
      el.classList.remove("active");
    }

    const mapKeyLabel = {
      " ": "Space",
      Enter: "Enter",
      Shift: "Shift",
      Backspace: "Back",
      Tab: "Tab",
      Control: "Ctrl",
      Alt: "Alt",
      CapsLock: "Caps",
    };

    const pressedKey = mapKeyLabel[e.key] || e.key.toUpperCase();

    const specialChar = el.textContent;
    if (
      (specialChar === "," && e.key === ",") ||
      (specialChar === "." && e.key === ".") ||
      (specialChar === "!" && e.key === "!") ||
      (specialChar === "?" && e.key === "?") ||
      (specialChar === "@" && e.key === "@") ||
      (specialChar === "#" && e.key === "#") ||
      (specialChar === "$" && e.key === "$") ||
      (specialChar === "%" && e.key === "%") ||
      (specialChar === "&" && e.key === "&") ||
      (specialChar === "*" && e.key === "*")
    ) {
      el.classList.remove("active");
    }
  });
});
