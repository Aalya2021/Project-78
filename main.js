var images =
[
    "WhatsApp Image 2021-06-10 at 12.02.09 PM",
    "WhatsApp Image 2021-06-10 at 12.02.26 PM",
    "WhatsApp Image 2021-06-10 at 12.02.37 PM",
    "WhatsApp Image 2021-06-10 at 12.02.59 PM",
    "WhatsApp Image 2021-06-10 at 12.03.16 PM",
    "WhatsApp Image 2021-06-10 at 12.03.33 PM",
    "WhatsApp Image 2021-06-10 at 12.03.55 PM"
];
var names= ["Siya", "Mama", "Nanu", "Nani", "Buddy", "Dadi", "Dadu"];

var i=0;
function update()
{
    i++;
    var number_of_photos= 7;
    if(i > number_of_photos)
    {
    i=0;    
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("Family_img").src= updatedImage;
    document.getElementById("names").innerHTML = updatedName;
}