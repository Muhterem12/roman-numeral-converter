'use strict';

const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const x = 3;

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') output.click();
});

// console.log(Object.keys(romanNumbers));

let str = '';

const converter = function () {
  btn.addEventListener('click', (e) => {
    str = '';
    let cur = input.value;

    for (let i of Object.keys(romanNumbers)) {
      // * romanNumbers[i] // normal number
      // * i // roman number

      let q = Math.floor(cur / romanNumbers[i]);
      cur = cur - q * romanNumbers[i];
      str = str + i.repeat(q);
    }
    console.log(str);
  });
  return str;
};
console.log(converter());

btn.addEventListener('click', (e) => {
  let cur2 = input.value;

  if (!cur2) {
    output.innerText = 'Please enter a valid number';
  } else {
    output.innerText = converter();
  }
});
