// https://www.omnicalculator.com/conversion/gal-to-kg

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgRadio = document.getElementById('kgRadio');
const galRadio = document.getElementById('galRadio');

let kg;
let gal = v; 

// labels of the inpust
const variable = document.getElementById('variable');

kgRadio.addEventListener('click', function() {
  variable.textContent = 'gal';
  gal = v;
  result.textContent = '';
});

galRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;

  else if(galRadio.checked)
    result.textContent = `gal = ${computegal().toFixed(5)}`;
})

// calculation

function computekg() {
  return Number(gal.value) * 3.79;
}

function computegal() {
  return Number(kg.value) / 3.79;
}