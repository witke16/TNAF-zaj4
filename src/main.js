console.log("hello world")
// zmienne
var Rekord = 0;
var points_per_click = 1.00;
var points_per_second = 1.00;

const RekordText = document.querySelector("#record");
const ppcTEXT = document.querySelector("#ppc");
const ppsText = document.querySelector("#pps");

let upgradeLevel = [-1,0,0,0,0,0,0];
let upgradeCost = [-1,10, 100,1000,5000,100000,100]; // -1 zarezerwowane 0 miejsce w tabeli

// event listenery na obiekty klikera i buttonow upgradu
    const clicker =  document.querySelector(".clicker");
    // kolejne buttony ulepszen
    const button1 =  document.querySelector("#upgrade1Button");
    const button2 =  document.querySelector("#upgrade2Button");
    const button3 =  document.querySelector("#upgrade3Button");
    const button4 =  document.querySelector("#upgrade4Button");
    const button5 =  document.querySelector("#upgrade5Button");
    const button6 =  document.querySelector("#upgrade6Button");

    button1.addEventListener("click", () => UpgradeParams(1));
    button2.addEventListener("click",() => UpgradeParams(2));
    button3.addEventListener("click",() => UpgradeParams(3));
    button4.addEventListener("click",() => UpgradeParams(4));
    button5.addEventListener("click",() => UpgradeParams(5));
    button6.addEventListener("click",() => UpgradeParams(6));

  
    clicker.addEventListener("click",clickFunction)



// funckja aktualizujaca rekord po kliknieciu w ciastko
function clickFunction ()
{
    Rekord += points_per_click;
    updateUserInfo();
}
// funkcja odpowiedzialna za ulepszanie naszych parametr
function UpgradeParams(UpgradeType)
{

            if (UpgradeType == 1 && Rekord >= upgradeCost[UpgradeType])
            {
                console.log("test1")
                points_per_second+=0.1;
                Rekord-=upgradeCost[UpgradeType];

                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }
                console.log(upgradeLevel[UpgradeType])
                console.log( upgradeCost[UpgradeType])
                var upgradeLevelText = document.querySelector("#upgrade1Level");
                var upgradeCostText =  document.querySelector("#upgrade1CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
            else if (UpgradeType == 2 && Rekord >= upgradeCost[UpgradeType])
            {
        
                points_per_second+=1;
                Rekord-=upgradeCost[UpgradeType];
                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }
              
                var upgradeLevelText = document.querySelector("#upgrade2Level");
                var upgradeCostText =  document.querySelector("#upgrade2CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
            else if (UpgradeType == 3 && Rekord >= upgradeCost[UpgradeType])
            {
        
                points_per_second+=5;
                Rekord-=upgradeCost[UpgradeType];
                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }

                var upgradeLevelText = document.querySelector("#upgrade3Level");
                var upgradeCostText =  document.querySelector("#upgrade3CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
            else if (UpgradeType == 4 && Rekord >= upgradeCost[UpgradeType])
            {
        
                points_per_second+=10;
                Rekord-=upgradeCost[UpgradeType];
                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }

                var upgradeLevelText = document.querySelector("#upgrade4Level");
                var upgradeCostText =  document.querySelector("#upgrade4CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
            else if (UpgradeType == 5 && Rekord >= upgradeCost[UpgradeType])
            {
        
                points_per_second+=100;
                Rekord-=upgradeCost[UpgradeType];
                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }

                var upgradeLevelText = document.querySelector("#upgrade5Level");
                var upgradeCostText =  document.querySelector("#upgrade5CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
            else if (UpgradeType == 6 && Rekord >= upgradeCost[UpgradeType])
            {
        
                points_per_click+=points_per_click*0.1;
                Rekord-=upgradeCost[UpgradeType];
                upgradeLevel[UpgradeType]++;
                
                if (upgradeLevel[UpgradeType] >=2)
                {
                    upgradeCost[UpgradeType] += 0.3*upgradeCost[UpgradeType];
                }

                var upgradeLevelText = document.querySelector("#upgrade6Level");
                var upgradeCostText =  document.querySelector("#upgrade6CookiesPerSecond");

                upgradeLevelText.innerHTML = upgradeLevel[UpgradeType].toFixed(2);
                upgradeCostText.innerHTML = upgradeCost[UpgradeType].toFixed(2);
            }
        updateUserInfo();
}
function updateUserInfo ()
{
    RekordText.innerHTML = Rekord.toFixed(2);
    ppcTEXT.innerHTML = points_per_click.toFixed(2);
    ppsText.innerHTML = points_per_second.toFixed(2);
}

// aktualizowanie co sekunde
setInterval( () =>
{
    Rekord = Rekord + points_per_second

   updateUserInfo();

} ,1000)