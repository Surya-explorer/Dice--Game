let rand1 = 1 +  Math.random()*6 ;
rand1 = Math.floor(rand1) ;

let randimg1 = "dice" + rand1 + ".png" ;
let randsource1 = "Image/" + randimg1 ;

var image_1 = document.querySelectorAll("img")[0] ;

image_1.setAttribute("src" , randsource1) ;

let rand2 = 1 +  Math.random()*6 ;
rand2= Math.floor(rand2) ;

let randimg2 = "dice" + rand2 + ".png" ;
let randsource2 = "Image/" + randimg2 ;

var image_2 = document.querySelectorAll("img")[1] ;

image_2.setAttribute("src" , randsource2) ;


// For Player 1 

if (rand1 > rand2 ){
    document.getElementById("heading").innerHTML = "🚩 Player 1 Wins!" ;
}
else if ( rand1 < rand2 ){
    document.getElementById("heading").innerHTML = "Player 2 Wins! 🚩"
    
}
else {
    document.getElementById("heading").innerHTML = "Draw!"

}


