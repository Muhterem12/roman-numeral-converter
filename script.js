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

btn.addEventListener('click', () => {
  const value = input.value;

  if (!value) output.innerText = 'Please enter a valid number';
  console.log('success1');
});

// console.log(Object.keys(romanNumbers));

btn.addEventListener('click', (e) => {
  for (let i of Object.keys(romanNumbers)) {
    // console.log(romanNumbers);

    const cur = input.value;
    converter(cur);

    console.log(romanNumbers[i]);
    console.log(i);
    console.log('success2');
  }
});

const converter = function (num) {
  console.log(num);
};
