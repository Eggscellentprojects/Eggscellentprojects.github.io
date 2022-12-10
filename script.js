// The kritter from Donkey Kong Country
let kritter = document.getElementById("kritterClick"); // Get the kritter image with the id "kritterClick" as kritter
let owie = document.getElementById("kritterHurt"); // Get the kritter hurt sound file with the id "kritterHurt" as owie

// Function for when the kritter image is clicked, the kritter hurt sound is played from the html
const kritterHurt = () =>
{
    owie.play();
}

// Change the kritter sprite when you move your mouse over to said sprite
kritter.addEventListener('mouseover', () =>
{
    kritter.src = "./images/kritter2.png";
})
// Change the kritter back to its original sprite
kritter.addEventListener('mouseout', () =>
{
    kritter.src = "./images/kritter1.png";
})