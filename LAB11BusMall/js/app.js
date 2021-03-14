'use strict';

let bag = ['bag', 'jpg'];
let banana = ['banana', 'jpg'];
let bathroom =  ['bathroom', 'jpg'];
let boots = ['boots', 'jpg '];
let breakfast = ['breakfast', 'jpg'];
let bubblegum = ['bubblegum', 'jpg '];
let chair = ['chair', 'jpg'];
let cthulhu =['cthulhu', 'jpg'];
let dogduck =['dog-duck', 'jpg'];
let dragon =  ['dragon', 'jpg'];
let pen =['pen', 'jpg'];
let petsweep = ['pet-sweep', 'jpg'];
let scissors = ['scissors', 'jpg'];
let shark =['shark', 'jpg'];
let sweep =['sweep', 'png'];
let tauntaun =['tauntaun', 'jpg'];
let unicorn =['unicorn', 'jpg'];
let usb = ['usb', 'gif'];
let watercan =['water-can', 'jpg'];
let wineglass = ['wine-glass', 'jpg'];
//array of names and extentions.
const names = [ bag ,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogduck,dragon,pen,petsweep,scissors,shark,sweep,tauntaun,unicorn,usb,watercan,wineglass];

// function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const names = [ 'bag' ,'banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// GET SECTION ID AND IMAGES ID :
// let sectionid = document.getElementById('imagesSection');
let leftimgid = document.getElementById('leftImage');
let centerimgid = document.getElementById('centerImage');
let rightimgid = document.getElementById('rightImage');

// define constructor :
function Busmall (name ,extentions){
  this.name =name;
  this.views =0;
  this.votes =0;
  // make path for each image
  this.path =`./assets/${name}.${extentions}`;
  Busmall.all.push(this);
}

// the static proparity :
Busmall.all=[]; // HERE WE WILL PUSH EVERY THING WILL GO TO THE CONSTRUCTOR:

// here we want to create an objects from the constructor one object for all items (images) inside the names arr:
// here we made condition to check on the image path.
// for (let i =0 ; i<names.length ;i++){
//   if (names[i] === 'sweep'){
//     new Busmall (names[i],'png');
//   } else if (names[i] === 'usb'){
//     new Busmall (names[i],'gif');
//   } else {
//     new Busmall (names[i],'jpg');
//   }
// }
for (let i =0 ; i<names.length ;i++){
  let object = names[i];
  new Busmall(object[0],object[1]);
}
// to log the objects to the console we can use console . table (Busmall.all)
console.table(Busmall.all);


// MAKING THE RENDER FUNCTION :
function render(){
  let leftpicrandomnum = randomNumber(0 , Busmall.all.length-1); // get random index from busmall.all[]
  let leftrandomimage = Busmall.all[leftpicrandomnum]; // here is object include all properties
  let centerpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let centerrandomimage = Busmall.all[centerpicrandomnum];
  let rightpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let rightrandomimage = Busmall.all[rightpicrandomnum];
  console.log(leftpicrandomnum);
  console.log(leftrandomimage);

  // send image src to the image id :
  leftimgid.src = leftrandomimage.path; // assign the path to the image source 
  centerimgid.src = centerrandomimage.path;
  rightimgid.src = rightrandomimage.path;
  console.log(leftrandomimage.path);// its give me the name !!!!
}
render();


