console.log("hello world")
var Rekord = 0;
var points_per_click = 1;


document.querySelector(".infos").innerText = "Your record is "+Rekord+".\n"+"Points per click: "+points_per_click+". \n";

    const tmp =  document.querySelector(".clicker")
    console.log(tmp)
    tmp.addEventListener("click",click)

   const button1= document.querySelector("#button1");
   button1.addEventListener("click", () => Upgrade(1) );
   const button2= document.querySelector("#button2");
   button2.addEventListener("click", () => Upgrade(2) );
   const button3= document.querySelector("#button3");
   button3.addEventListener("click", () => Upgrade(3) );
   const button4= document.querySelector("#button4");
   button4.addEventListener("click", () => Upgrade(4) );
   const button5= document.querySelector("#button5");
   button5.addEventListener("click", () => Upgrade(5) );

function click ()
{
    Rekord += points_per_click;
    document.querySelector(".infos").innerText = "Your record is "+Rekord+".\n"+"Points per click: "+points_per_click+". \n";
    console.log(Rekord)
}
function Upgrade (upgradeID )
{
    if (upgradeID == 1 && Rekord >= 10  )
    {
        points_per_click = 2
        Rekord -=10
    }
    if (upgradeID == 2 && Rekord >= 100  )
    {
        points_per_click = 5
        Rekord -=100
    }
    if (upgradeID == 3 && Rekord >= 250  )
    {
        points_per_click = 10
        Rekord -=250
    }
    if (upgradeID == 4 && Rekord >= 500 )
    {
        points_per_click = 100
        Rekord -=500
    }
    if (upgradeID == 5 && Rekord >= 10000  )
    {
        points_per_click = 250
        Rekord -=10000
    }
    console.log(points_per_click)
    console.log(Rekord)
    document.querySelector(".infos").innerText = "Your record is "+Rekord+".\n"+"Points per click: "+points_per_click+". \n";

}