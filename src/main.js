console.log("hello world")
var Rekord = 0;
var points_per_click = 2;
var points_per_second = 100;
var PPC_update_counter = 1;

  document.querySelector(".infos").innerText = "Your record is \n"
        +Rekord.toFixed(2)+"\n"+"Points per click: \n"
            +points_per_click.toFixed(2)+" \n"+"Points per second: \n"
                +points_per_second.toFixed(2)+" \n";
                
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

   const button6= document.querySelector("#button6");
   button6.addEventListener("click", () => Upgrade(6) );

function updateInfos()
{
    document.querySelector(".infos").innerText = "Your record is \n"
        +Rekord.toFixed(2)+"\n"+"Points per click: \n"
            +points_per_click.toFixed(2)+" \n"+"Points per second: \n"
                +points_per_second.toFixed(2)+" \n";
}
function click ()
{
    Rekord += points_per_click;
    updateInfos();
}
function Upgrade (upgradeID )
{
    if (upgradeID == 1 && Rekord >= 10  )
    {
        points_per_second += 0.01
        Rekord -=10
    }
    if (upgradeID == 2 && Rekord >= 80  )
    {
        points_per_second += 0.1
        Rekord -=80
    }
    if (upgradeID == 3 && Rekord >= 250  )
    {
        points_per_second += 1
        Rekord -=250
    }
    if (upgradeID == 4 && Rekord >= 750 )
    {
        points_per_second += 10
        Rekord -=750
    }
    if (upgradeID == 5 && Rekord >= 3000  )
    {
        points_per_second += 100
        Rekord -=3000
    }

    if (upgradeID == 6 && Rekord >= 100*PPC_update_counter)
        {
            points_per_click += 0.1*points_per_click;
            Rekord -= 100*PPC_update_counter;
            PPC_update_counter++;

        }

    updateInfos()
}

setInterval( () =>
{
    Rekord = Rekord + points_per_second
    updateInfos()

} ,1000)