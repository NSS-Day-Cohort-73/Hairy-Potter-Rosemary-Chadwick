

const potteryToSell = []   //this array will hold pottery to be sold
// Define and export a function that is responsible for determining if a piece of pottery should be sold.
//export const toSellOrNotToSell = (firedPottery) => { 
//    } if firedPottery.weight >= 6 && fired = true {
 //     firedPottery.price = 40; 
//     } else if fired = true {
//      firedPottery.price = 20; }
 //  potteryToSell.push(firedPottery)
 // return potteryToSell

 //! negates or inverts the truthiness of a boolean expression

 export const toSellOrNotToSell = (firedPottery) => {
    if (!firedPottery.cracked) { 
        if (firedPottery.weight >= 6) {
            firedPottery.price = 40;
        } else {
            firedPottery.price = 20;
        }
    potteryToSell.push(firedPottery);
    }
    return firedPottery;
 }
  export const usePottery = () => {
    return  potteryToSell.slice() 
  }
     // ...returns and exports a copy of the array .slice() might need parameters... hover over it will tell. or use const copyOfArray = [...originalArray]