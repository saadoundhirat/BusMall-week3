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
// make golbal variable the holde how many time clecked:
// let numofclicked = 0 ;// viewed

// GET SECTION ID AND IMAGES ID :
let sectionid = document.getElementById('imagesSection');
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
  let centerpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let centerrandomimage = Busmall.all[centerpicrandomnum];
  let rightpicrandomnum = randomNumber(0 , Busmall.all.length-1);
  let rightrandomimage = Busmall.all[rightpicrandomnum];
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

///////////// add event listener for each image :
sectionid.addEventListener('click', clickeventlistener);
function clickeventlistener (event){
  event.preventDefault();
  if (event.target.id === 'leftimgid' || event.target.id === 'centerimgid' || event.target.id === 'rightimgid'){
    for (let i=0 ; i<Busmall.all.length ;i++){
      if (Busmall.all[i].name === event.target.titel){
        Busmall.all[i].view +=1;
        Busmall.all[i].votes+=1;
        console.log(Busmall.all[i]);
      }
    }
  }render();
}

// function to display the result
function showimages (){
  let unorderlist = document.createElement('ul');
  for (let i=0 ; i<Busmall.all.length ; i++){
    let listitem = document.createElement('li');
    listitem.textContent = 'Item name :'+ Busmall.all[i].name +'go number of :' + 'Votes :'+ Busmall.all[i].votes ;
    unorderlist.appendChild(listitem);
  }
  showtheresult.appendChild(unorderlist);
}




render();

showimages();











/////////////////////////////////////////////////////////////////////////////////////////////////////
// const numberofclickedimages=[];
// /////////////////////////////////////make the event listener :
// sectionid.addEventListener('click', clickhandler);
// function clickhandler(event){
//   numofclicked=numofclicked+1; // to calculate number of clickes :
//   //event.target.id this one will return the id of the target which is one of the images
//   if (event.target.id === leftimgid || event.target.id === centerimgid || event.target.id === rightimgid){
//     for (let i=0 ; i<Busmall.all.length ;i++){
//       if (Busmall.all[i].name === event.target.titel){
//         Busmall.all[i].clickedtiemimg++;
//         Busmall.all[i].numviewstime++;
//         // numberofclickedimages.push[Busmall.all[i].name];
//       }
//     }
//     render();
//   }
//   if (clickhandler === 24){
//     showimages();
//   }
// }

