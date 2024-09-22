let potteryPieces = 1;
let potteryId = 1; //unique id for each piece of pottery made in the function


export const makePottery = (shape, weight, height) => {
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId++
    }

    return potteryPiece
}

