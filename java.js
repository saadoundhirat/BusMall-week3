'use strict';

const image_name_Ext =[['bag','jpg'],['banana','jpg'],['bathroom','jpg'],['boots','jpg'],['breakfast','jpg'],['bubblegum','jpg'],
  ['chair','jpg'],['cthulhu','jpg'],['dog-duck','jpg'],['dragon','jpg'],['pen','jpg'],['pet-sweep','jpg'],['scissors','jpg'],
  ['shark','jpg'],['sweep','png'],['tauntaun','jpg'],['unicorn','jpg'],['usb','gif'],['water-can','jpg'],['wine-glass','jpg']];

let number_of_section=[]; //// for creating element's

const sectionDiv =document.getElementById('section_div');
let forButton=document.getElementById('forButton');
let btn=document.createElement('button');
btn.innerHTML='Show REsult';
forButton.appendChild(btn);
let pargh=document.getElementById('paragraph_counter');

btn.style.width='100px';
btn.style.background='rgba(184, 118, 118, 0.781);';
btn.style.border='5px ridge red';
btn.style.color='black';
btn.style.display='none';

for(let i=0;i<3;i++){
  number_of_section[i]=document.createElement('img');
  document.body.appendChild(number_of_section[i]);
  number_of_section[i].setAttribute('id',`imgID${i}`);
}

function Product(name,imgExt){
  this.name=name;
  this.views=0;
  this.votes=0;
  this.path=`./assets/${name}.${imgExt}`;//it will take the name of url from the array which we made before depend on the name in it's own url
  Product.all.push(this); ///instead of put one by one , using this do all process ..... cute hmm..
}
Product.all=[];
for(let i=0;i<image_name_Ext.length;i++){
  new Product(image_name_Ext[i][0],image_name_Ext[i][1]);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render(){
  for(let i=0;i<3;i++){
    const index=randomNumber(0,Product.all.length-1);
    let uniqueIndex=unique(index);
    number_of_section[i].src=Product.all[uniqueIndex].path;
    number_of_section[i].title=Product.all[uniqueIndex].name;
  }
}

let unique_indx_1=-1, unique_indx_2=-1;
function unique(indx){
  while(unique_indx_1===indx || unique_indx_2===indx){
    indx=randomNumber(0,Product.all.length-1);
  }
  unique_indx_2=unique_indx_1;
  unique_indx_1=indx;
  return unique_indx_1;
}

let counter=0;
function showData(event){
  for(let j=0 ;j<3;j++){
    if(event.target.id===number_of_section[j].id){
      for(let i=0;i<Product.all.length;i++){
        if (Product.all[i].name === event.target.title){
          Product.all[i].votes++;
          Product.all[i].views++;
        }
      }
    }
    else {
      for(let i=0;i<Product.all.length;i++)
        if (Product.all[i].name === number_of_section[j].title){
          Product.all[i].views++;
        }
    }
  }
  counter++;
  render();
  pargh.innerHTML=counter;
  if(counter===25){
    btn.style.display='block';
    btn.addEventListener('click', result_output);
    for(let i=0; i<3;i++){
      number_of_section[i].removeEventListener('click',showData); }
  }
}
for(let i=0; i<3;i++){
  number_of_section[i].addEventListener('click',showData);
}
////////////////////////////////////////////////
render();

function result_output(){

  for(let i=0;i<Product.all.length;i++){
    let items=document.createElement('li');
    items.innerHTML=Product.all[i].name +' had '+Product.all[i].votes+' Votes, and was Seen '+Product.all[i].views+ ' times.';
    sectionDiv.appendChild(items);
  }
}