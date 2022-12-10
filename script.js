let card1 = document.getElementsByClassName("card-1")[0]
console.log(card1)
card1.style.background = "blue"
card1.style.color = "brown"
card1.style.border = "2px solid black"

let card_text = document.getElementsByClassName("card-text")[0]
card_text.innerHTML = "This is card : 1"
card_text.style.color = "yellow"
card_text.style.background = "orange"

// let card_title = document.getElementsByClassName("card-title")[1]   //not working
// card_title.innnerHTML = "This is a card title"
// console.log(card_title)

let a = document.getElementsByTagName('h5')[0];
a.innerHTML = "This is a card-title : 1"

let z = document.getElementById("card1");
z.innerText = "<b>Card1</b>"
z.innerHTML = "<i>Card1</i>"

let btn = document.getElementsByClassName("btn-primary")[0]
btn.style.background = "red"
btn.style.color = "cyan"


/*-------------card 2---------------*/

let card2 = document.getElementsByClassName("card-2")[0]
card2.style.border = "2px solid black"

let b = document.getElementsByTagName('h5')[1];
b.innerHTML = "This is a card-title : 2"

let card_text2 = document.getElementsByClassName("card-text")[1]
card_text2.innerHTML = "This is card : 2"
card_text2.style.color = "orange"
card_text2.style.background = "yellow"

let btn2 = document.getElementsByClassName("btn-primary")[1]
btn2.style.background = "cyan"
btn2.style.color = "red"


/*-------------card 3---------------*/

let card3 = document.getElementsByClassName("card-3")[0]
card3.style.border = "2px solid black"

let card_text3 = document.getElementsByClassName("card-text")[2]
card_text3.innerHTML = "This is card : 3"
card_text3.style.color = "orange"
card_text3.style.background = "yellow"

let btn3 = document.getElementsByClassName("btn-primary")[2]
btn3.style.background = "cyan"
btn3.style.color = "red"

let ctitles=document.querySelectorAll(".card-title")
ctitles[0].style.color="pink"
ctitles[1].style.color="blue"
ctitles[2].style.color="red"