"use strict";

const coinFrom = document.querySelector(".coin-from");
const coinTo = document.querySelector(".coin-to");
const noTxn = document.querySelectorAll(".no-txn");
const swapHead = document.querySelector(".swap-head");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const swapContain = document.querySelector(".swap-contain");
const inputPhraseBox = document.querySelector(".input-phrase");
const allModal = document.querySelectorAll(".all-modal");
const textContent = document.querySelector(".text-content");
const mainConnectBtn = document.querySelector(".main-connect-btn");

document.addEventListener("keyup", function () {
  const calcPrice = coinFrom.value * 0.0910193;
  coinTo.value = parseFloat(calcPrice);
});

document.body.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("no-txn")) {
    e.target.style.opacity = "0.5";
  }
});

document.body.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("no-txn")) {
    e.target.style.opacity = "1";
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("no-txn")) {
    modal.classList.remove("hidden");
    swapContain.style.opacity = "0.3";
  }
});

closeBtn.addEventListener("click", function (e) {
  modal.classList.add("hidden");
  swapContain.style.opacity = "1";
});

document.body.addEventListener("click", function (e) {
  if (!e.target.classList.contains("connect-wallet")) return;
  allModal.forEach((modal) => {
    modal.classList.add("hidden");
  });
  inputPhraseBox.classList.remove("hidden");
  swapContain.style.opacity = "0.5";
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("connect-wallet")) return;
  if (!e.target.classList.contains("dntclose")) {
    inputPhraseBox.classList.add("hidden");
    swapContain.style.opacity = "1";
  }
});

mainConnectBtn.addEventListener("click", function () {
  const text = textContent.value.split(" ");
  console.log(text);
  if (text.length > 12) {
    alert("Sign in...");
  } else {
    alert("incorect KeyPhrase");
  }
});
