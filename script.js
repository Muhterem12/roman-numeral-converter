'use script';

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

output.addEventListener('click', () => {
  const value = input.value;

  if (!value) output.innerText = 'Please enter a valid number';
});
