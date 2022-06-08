var newNumber1=Math.floor(Math.random()*6 +1 );
var newNumber2=Math.floor(Math.random()*6 + 1);

var newImg1="images/dice"+newNumber1+".png";
document.querySelector(".img1").src=newImg1;

var newImg2="images/dice"+newNumber2+".png";
// document.querySelector(".img2").src=newImg2;
document.querySelector(".img2").setAttribute("src", newImg2);

if(newNumber1>newNumber2){
   document.querySelector("h1").innerHTML="🚩 Player 1 wins"
}else if(newNumber1<newNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩"
} else{
    document.querySelector("h1").innerHTML="Draw !"
}
