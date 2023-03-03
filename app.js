/*
prvi zadatak

let faktorijal=function(broj){
 let fak=1;
 for (let i=1; i<=1; i++)
  fak *=i;
  return fak;
}
  alert (faktorijal(10));

  drugi zadatak
  let prestupna=function(godina){
    if(godina%4==0){
      return  true;
  }

  else{
    return false
  }
}
let godina=Number(prompt("Unesi godinu"));
   if(prestupna(godina)){
    alert("godina prestupna")
   }
   else{
    alert("godina nije prestupna")
   }

   cetvrti zadatak
   let InchtoFt=(inch)=> inch/12;
alert(InchtoFt(1));


treci zadatak
let obrni=function(broj){
let r=0
let reversed =0;
while(broj !=0){
    r=broj%10;
    reversed=reversed *10 +r;
    broj=Math.floor(broj/10);
    
}
} 

let map={
  xposition:0,
  goRight:function(){
    this.xposition=this.xposition +1
  },
  goLeft:function(){
    this.xposition=this.xposition -1
  },
  goUp:function(){
    this.yposition=this.yposition +1
  },
  goDown:function(){
    this.yposition=this.yposition -1
  },
  
}

function korisnik(ime, tel, email, knjiga){
  this.ime=ime;
  this.tel=tel;
  this.email=email;
  this.knjiga="";
  this.uzimanje= function(Knjiga){
  this.knjiga;
  console.log(this.ime + "je uzeo" + this.knjiga)
  }
}
function knjiga(ime, autor, godinaIzdanja){
  this.ime=ime;
  this.autor=autor;
  this.godinaIzdanja=godinaIzdanja;
}
let korisnik1= new Korisnik ("marko kamenjar", "063965873", "markokamenjar@gmail.com")
let knjiga1= new knjiga("Avanture Zeljka Mitrovica", "Milos Kovacevic", "18549230")


let a=["Jabuka","Kruska","Bananana" ];
console.log(a[0])
a[2]="Kajsija";
a[3]="Jagoda";
console.log(a.length)
for(let i=0; i<a.length;i++){
  console.log(a[i])
}

 let brojevi=[1,5,10,25,13]
 let sum=0;
 let  


for(elemen of niz ){
  console.log(niz{i})
}
let sum=0;

for(element of niz){
  sum= sum + element;
}

console.log("suma niza je " + sum);
*/
/*
let max = niz[0];
let min = niz[0];
for(e of niz){
  if(e>max) max = e;
  if(e<min) min = e;
}

let drugiNajveci = min
for(e of niz){
  if(e > drugiNajveci && e < max){
    drugiNajveci = e;
  }
}
*/
//console.dir(document)
//console.log(document.domaine)

//console.log(document.title);
//document.title = "Moj prvi sajt";

//console.dir(document.head);
//console.log(document.all[8])

//document.all[8].textContent = "Drugi naslov"
/*
console.log(document.forms);
console.log(document.forms[0]);

console.log(document.getElementsByClassName("list-item"));

let items = document.getElementsByClassName("list-item");

//items[3].textContent = "promenio sam listu";
//items[2].style.backgroundColor = "purple";

for(let i= 0; i<items.length; i++){
  if(i%2 == 0) items[i].style.backgroundColor = "cyan";
  else items [i].style.backgroundColor = "pink"
}
console.dir (document.getElementById("header-title"))
let headerTitle = document.getElementById("header-title");
headerTitle.innerHTML= "<h3> ASD </h3>"
console.log(headerTitle.textContent)
console.log(headerTitle.innerText)
//get element by tag name
console.log(document.getElementsByTagName("li"));
let li = document.getElementsByTagName("li");

li[1].textContent = "asd";
li[1].style.fontSize = "20px"
li[1].style.fntWeight = "bold"

 let title= document.getElementsByClassName("title")
 title(1).textContent="mjau"
 let form=document.getElementsByClassName("form-inlines")
 form[0].style.backgroundColor ="yellow"
 let container = document.getElementById("container") 
 container.style.backgroundColor = "purple"
//textContent vs innerText
//QuerySelector 

let listItem = document.getElementById("items")
console.log(listItem.parentNode.parentNode)

//parentElement

console.log(listenItem.parentElement)

listItem.parentElement.stylebackgroundColor = "red"

//children (element)

//console.log(listItem.children)

//listItem.children[0].style.backgroundColor = "yellow"

//firstChild (node)

console.log(listItem.firstChild); //console.log(listItem.childNodes[0])

//firstElementChild (element)

console.log(listItem.firstElementChild)//console.log(listItem.children[0])

//lastChild  (node)
//lastElementChild (element)

//sibling 

console.log(listItem.previousElementSibling)
listItem.previousElementSibling.style.backgroundColor = "brown"

console.log(listItem.nextElementSibling)

listItem.nextElementSibling.style.backgroundColor = "red"   

let lista = document.querySelectorAll(".list-item");

console.log(lista)
lista[1].previousElementSibling.style.backgroundColor = "blue"
lista[1].nextElementSibling.style.backgroundColor = "lightblue"

lista[1].parentElement.parentElement.style.backgroundColor = "orange"
*/

let newDiv = document.createElement("div");
let textNode = document.createTextcode("Napravio sam novi element");

let div2=document.createElement("div");
let createtextNode=document.createTextNode("tekst")
div2.appemdChild(textNode);

let google=document.getElementById("google")
let a=document.querySelector("#google p")
google.insertBefore(div2,a)

//izaberemen element  u koji houc da stavim novi element
let divContainer = document.getElementById("paragraf")
//izaberem element pored kog hocu da stavim novi element
let divParagraf = document.querySelector("#paragraf p");
//stavim element u divContainer pored divParagraf
divContainer.insertBefore(newP, divParagraf)
let newLi = document.createElement("li");
let newText = document.createTextNode("Novi item");
newLi.appendChild(newText);
let items = document.getElementById("items");
console.log(ietms.childNodes)
items.insertBefore(newLi,items.lastChild.nextSibling);  

let addNewItemToList = function () {
  let text = textBox.value;
  let newLi = document.createElement("li");
  let newText = document.createTextNode(text);
  newLi.appendChild(newText);
  let items = document.getElementById("items");
  console.log(items.childNodes)
  items.insertBefore(newLi, items.lastChild.nextSibling);
}
GamepadButton.addEventListener ('click', addNewItemToList)