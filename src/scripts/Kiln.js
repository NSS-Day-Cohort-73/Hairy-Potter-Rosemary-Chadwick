
//need to do
    //1. define and export firePottery()

    //2. parameters (potteryPiece, firing temperature)

    //3. firePottery() must add new property of fired or cracked. 
        //if temp <= 2200 fired boolean true
        // temp > 2200 cracked boolean true

   
export const firePottery = (potteryPiece, firingTemperature) => {
    if (firingTemperature <= 2200) {
        potteryPiece.fired = true;
        potteryPiece.cracked = false;
    } else {
        potteryPiece.fired = false;
        potteryPiece.cracked = true;
    }

     //return augmented object
    return potteryPiece;
}


