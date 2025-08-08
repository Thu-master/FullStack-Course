//lời hứa, thành công or thất bại(gọi api không cần có thời gian này, mặc định có thòi gian gọi)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//các bước chính, mỗi bước đều asyns function

async function diCho() {
  console.log("đi chợ...");
  await delay(2000);
}

async function muaDoAn() {
  console.log("mua đồ ăn...");
  await delay(1820);
  console.log("đi về");
}

async function voGao() {
  console.log("Vo gạo...");
  await delay(2000);
}

async function nauCom() {
  console.log("Nấu cơm");
  await delay(2000);
}

async function ruaThit() {
  console.log("rửa thịt...");
  await delay(2000);
}

async function luocTrung() {
  console.log("Luộc trứng...");
  await delay(2000);
}

async function ruaRau() {
  console.log("Rửa rau...");
  await delay(2000);
}

async function catThit() {
  console.log("Cắt thịt");
  await delay(2000);
}

async function lotTrung() {
  console.log("Lột trứng");
  await delay(2000);
}

async function khoThit() {
  console.log("Kho thịt...");
  await delay(5000);
}

async function luocRau() {
  console.log("Luộc rau");
  await delay(2000);
}

async function nauCanh() {
  console.log("Nấu canh...");
  await delay(3000);
}

async function tatBep() {
  console.log("Tắt bếp.....");
  await delay(5000);
}

async function bayDoAn() {
  console.log("Bày đồ ăn...");
  await delay(2000);
}

async function moiAn() {
  console.log("Mời ăn");
  await delay(2000);
}

async function an() {
  console.log("Ăn...");
  await delay(9000);
}

async function donDep() {
  console.log("Dọn dẹp.....");
  await delay(3000);
}

async function ruaBat() {
  console.log("Rửa bát...");
  await delay(2873);
}

async function poweroff() {
  console.log("Tắt máy");
  await delay(10000);
  console.log("Đang tắt");
  await delay(5000);
}

async function quyTrinhNauAn() {
  console.time("thời gian thực hiện");
  // await diCho();
  // await muaDoAn();
  await Promise.all([diCho(), muaDoAn()]);
  // await nauCom()
  // await lamThit()
  await Promise.all[(voGao(), nauCom())];
  await Promise.all([ruaThit(), catThit()]);
  await Promise.all[(luocTrung(), lotTrung())];
  await Promise.all[(ruaRau(), luocRau(), nauCanh())];
  await khoThit();
  await tatBep();
  await bayDoAn();
  await moiAn();
  await an();
  await ruaBat();
  console.timeEnd("thời gian thực hiện");
}

quyTrinhNauAn(); //gọi hàm quy trình nấu ăn
