'use strict';

window.onload = init;

function init() {
  const addBtnEl = document.getElementById('addBtn');
  addBtnEl.onclick = onAddBtnClicked;

  const subtractBtnEl = document.getElementById('subtractBtn');
  subtractBtnEl.onclick = onSubtractBtnClicked;

  const multiplyBtnEl = document.getElementById('multiplyBtn');
  multiplyBtnEl.onclick = onMultiplyBtnClicked;

  const divideBtnEl = document.getElementById('divideBtn');
  divideBtnEl.onclick = onDivideBtnClicked;
}

function onAddBtnClicked() {
  const num1El = document.getElementById('number1Field');
  const num2El = document.getElementById('number2Field');
  const answerEl = document.getElementById('answerField');
  const answer = Number(num1El.value) + Number(num2El.value);
  answerEl.value = answer;
}

function onSubtractBtnClicked() {
  const num1El = document.getElementById('number1Field');
  const num2El = document.getElementById('number2Field');
  const answerEl = document.getElementById('answerField');
  const answer = Number(num1El.value) - Number(num2El.value);
  answerEl.value = answer;
}

function onMultiplyBtnClicked() {
  const num1El = document.getElementById('number1Field');
  const num2El = document.getElementById('number2Field');
  const answerEl = document.getElementById('answerField');
  const answer = Number(num1El.value) * Number(num2El.value);
  answerEl.value = answer;
}

function onDivideBtnClicked() {
  const num1El = document.getElementById('number1Field');
  const num2El = document.getElementById('number2Field');
  const answerEl = document.getElementById('answerField');
  const answer = Number(num1El.value) / Number(num2El.value);
  answerEl.value = answer;
}
