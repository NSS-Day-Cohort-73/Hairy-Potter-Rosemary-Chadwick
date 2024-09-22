// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
let plate = makePottery("plate", 6, 1)
let platter = makePottery("platter", 12, 1.5)
let vase = makePottery("vase", 3, 7)
let bowl = makePottery("bowl", 4, 7)



// Fire each piece of pottery in the kiln
// invoke firePottery(potteryPiece, 2200) store augmented piece in let = firedPottery[]
//console.log(firedPottery[])

const firedPottery = [];
firedPottery.push(firePottery(mug, 2250));
firedPottery.push(firePottery(plate, 2200));
firedPottery.push(firePottery(platter, 2200));
firedPottery.push(firePottery(vase, 2200));
firedPottery.push(firePottery(bowl, 2200));

console.log(firedPottery)

//const firedMug = firePottery(mug, 2200)
//console.log(firedMug)

// Determine which ones should be sold, and their price
// invoke toSellOrNotToSell() for each of the 5 pieces created


//foreach loop simply performs the operation on each element.
firedPottery.forEach(pottery => {  //Inside the forEach loop, you call the toSellOrNotToSell function and pass in the current pottery object.
    toSellOrNotToSell(pottery); 
}); //toSellOrNotToSell() checks if the pottery is cracked. if !cracked, it assigns a price based on its weight and adds it to the potteryToSell array

const allPotteryForSale = usePottery();
console.log(allPotteryForSale);


// Invoke the component function that renders the HTML list

const renderPotteryToDOM = (potteryList) => {
    const potteryElement = document.getElementsByClassName('potteryList');

    if (potteryElement) {
        potteryElement.innerHTML = potteryHTML; 
        } else {
            console.error('Could not find element with class "potteryList"')
        }
};

const potteryHTML = PotteryList(); // Call PotteryList to get the HTML
renderPotteryToDOM(potteryHTML);



