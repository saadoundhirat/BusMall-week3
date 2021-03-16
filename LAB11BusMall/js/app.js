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

// GET SECTION ID AND IMAGES ID :
// let sectionid = document.getElementById('imagesSection');// this will hold images
let leftimgid = document.getElementById('leftImage');
let centerimgid = document.getElementById('centerImage');
let rightimgid = document.getElementById('rightImage');
let showtheresult =document.getElementById('showtheresult');// this section to show the result

// define constructor :
function Busmall (name ,extentions){
  this.name =name;
  this.titel =name;
  this.view = 0; // votes
  this.votes = 0;
  // make path for each image
  this.path =`./assets/${name}.${extentions}`;
  Busmall.all.push(this);
}

// the static proparity :
Busmall.all=[]; // HERE WE WILL PUSH EVERY THING WILL GO TO THE CONSTRUCTOR:
// creat objects
for (let i =0 ; i<names.length ;i++){
  let object = names[i];
  new Busmall(object[0],object[1]);
}

// MAKING THE RENDER FUNCTION :
function render(){
  let leftpicrandomnum = randomNumber(0 , Busmall.all.length-1); // get random index from busmall.all[]
  let leftrandomimage = Busmall.all[leftpicrandomnum]; // here is object include all properties
  //
  let centerpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let centerrandomimage = Busmall.all[centerpicrandomnum];
  //
  let rightpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let rightrandomimage = Busmall.all[rightpicrandomnum];
  // to prevent doublicate
  if (leftpicrandomnum === centerpicrandomnum || leftpicrandomnum === rightpicrandomnum){
    centerpicrandomnum = randomNumber(0 , Busmall.all.length-1);
    centerrandomimage = Busmall.all[centerpicrandomnum];
  } else if (centerpicrandomnum === rightpicrandomnum) {
    rightpicrandomnum = randomNumber(0 , Busmall.all.length-1);
    rightrandomimage = Busmall.all[rightpicrandomnum];
  }
  // send image src to the image id :

  leftimgid.src = leftrandomimage.path; // assign the path to the image source
  leftimgid.titel=leftrandomimage.titel;
  leftimgid.alt=leftrandomimage.titel;

  centerimgid.src = centerrandomimage.path;
  centerimgid.titel=centerrandomimage.titel;
  centerimgid.alt=centerrandomimage.titel;

  rightimgid.src = rightrandomimage.path;
  rightimgid.titel=rightrandomimage.titel;
  rightimgid.alt=rightrandomimage.titel;

}
let counter = 0;
///////////// add event listener for each image :
leftimgid.addEventListener('click', clickeventlistener);
centerimgid.addEventListener('click', clickeventlistener);
rightimgid.addEventListener('click', clickeventlistener);

function clickeventlistener (event){
  // event.preventDefault();
  counter++;
  if (event.target.id === 'leftImage' || event.target.id === 'centerImage' || event.target.id === 'rightImage'){
    for (let i=0 ; i<Busmall.all.length ;i++){
      if (Busmall.all[i].name === event.target.titel){
        Busmall.all[i].view +=1;
        Busmall.all[i].votes+=1;
        console.log('hhhhhhhhhhh');
      }else if (Busmall.all[i].name === leftimgid.titel || Busmall.all[i].name === centerimgid.titel || Busmall. all[i].name === rightimgid.titel){
        Busmall.all[i].view +=1;
      }
    }
    if (counter === 24 ){
      clickonbutton.style.display='block';
      clickonbutton.addEventListener('click',showimagesvotes);
      leftimgid.removeEventListener('click', clickeventlistener);
      centerimgid.removeEventListener('click', clickeventlistener);
      rightimgid.removeEventListener('click', clickeventlistener);
      console.table(Busmall.all);
    }render();
  }
}
render();

//// function to display the result
function showimagesvotes (){
  let unorderlist = document.createElement('ul');
  for (let i=0 ; i<Busmall.all.length ; i++){
    let listitem = document.createElement('li');
    listitem.textContent = 'Item name :'+ Busmall.all[i].name +'go number of :' + 'Votes :'+ Busmall.all[i].votes + 'view is ' +Busmall.all[i].view;
    listitem.style.fontSize='35px';
    listitem.style.fontFamily='arial';
    unorderlist.appendChild(listitem);
  }
  showtheresult.appendChild(unorderlist);
}
/////////////////////////////// making the button and the style//////////////////////////////////////
let clickonbutton = document.createElement('button');
clickonbutton.textContent=('button');
showtheresult.appendChild(clickonbutton);
clickonbutton.style.display='none';
clickonbutton.style.alignItems='center';
clickonbutton.style.width='120px';
clickonbutton.style.background='rgba(211, 115, 211, 0.8);';
clickonbutton.style.border='5px dottet red';
clickonbutton.style.color='red';
clickonbutton.style.marginLeft='47%';
clickonbutton.style.padding='40px';
clickonbutton.style.fontSize='15px';
