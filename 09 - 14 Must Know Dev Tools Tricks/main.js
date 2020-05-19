const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');
function makeGreen() {
  // const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hellow JS');

// Interpolated
console.log('Hellow %s', 'JavaSCRIPT');

// Styled
console.log('%c Hellow customized JS', 'font-size:15px; color:#BADA55');

// warning!
console.warn('JS fail');

// Error :|
console.error('JS Error');

// Info
console.info('JS is the best language in the WORLD!')

// Testing
console.assert(1 !== 1, 'That is wrong')

// clearing 
// console.clear()

// Viewing DOM Elements
console.dir(p)

// Grouping together 
dogs.forEach((dog) => {
  console.groupCollapsed(dog.name);
    console.log(`This dog is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} yars old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(dog.name);
})

// counting
console.count('JS');
console.count('JS');
console.count('JS');
console.count('JS');

// timing
console.time('GitHUB');
fetch('https://api.github.com/users/fenatan')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('GitHUB');
    console.log(data);
  })