import { usePottery } from './PotteryCatalog.js';

export const PotteryList = () => {
    let potteryHTML = '';
    const allPotteryForSale = usePottery();

    for (let i = 0; i < allPotteryForSale.length; i++) {
        const pottery = allPotteryForSale [i];
        potteryHTML += `
            <section class="pottery" id="pottery--1">
                    <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    <p>Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height</p>
                </div>
                <div class="pottery__price">
                     <p>Price is $${pottery.price}</p>
                </div>
            </section>
        `;
    }
    return potteryHTML;
}

