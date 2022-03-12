//problem 1:

function anaToVori(ana) {
    if (typeof ana != 'number' || ana < 0) {
        return 'Error!! Please, enter the positive number value.';
    }
    const voriCalculation = ana / 16;
    return voriCalculation;
}
const vori = anaToVori(32);
console.log(vori);



//problem 2:

function pandaCost(singaraQuantity, somochaQuantity, jilapiQuantity) {
    if (singaraQuantity < 0 || somochaQuantity < 0 || jilapiQuantity < 0) {
        return 'Error!! Please, enter the positive number value.';
    }
    if (typeof singaraQuantity != 'number' || typeof somochaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Error!! Please, enter the positive number value.';
    }
    const singaraPerPitch = 7;
    const somochaPerPitch = 10;
    const jilapiPerPitch = 15;
    const totalSingaraQuantity = singaraPerPitch * singaraQuantity;
    const totalSomochaQuantity = somochaPerPitch * somochaQuantity;
    const totalJilapiQuantity = jilapiPerPitch * jilapiQuantity;
    const totalPrice = totalSingaraQuantity + totalSomochaQuantity + totalJilapiQuantity;
    return totalPrice;
}
var totalCost = pandaCost(30, 24, 50);
console.log(totalCost);



//problem 3:

function picnicBudget(people) {
    if (typeof people != 'number' || people < 0) {
        return 'Error!! Please, enter the positive number value.';
    }
    const forFirstHundrade = 5000;
    const forSecoundHundrade = 4000;
    const forMoreHundrade = 3000;
    if (people <= 100) {
        const firstHundradeCost = people * forFirstHundrade;
        return firstHundradeCost;
    } else if (people <= 200) {
        const forFirstHundradeCost = 100 * forFirstHundrade;
        const restPeople = people - 100;
        const secoundHundradeCost = restPeople * forSecoundHundrade;
        const forTotalPeople = forFirstHundradeCost + secoundHundradeCost;
        return forTotalPeople;
    } else {
        const forFirstHundradeCost = 100 * forFirstHundrade;
        const forSecoundHundradeCost = 100 * forSecoundHundrade;
        const restPeople = people - 200;
        const moreHundradeCost = restPeople * forMoreHundrade;
        const forMoreTotalPeople = forFirstHundradeCost + forSecoundHundradeCost + moreHundradeCost;
        return forMoreTotalPeople;
    }
}
var totalBudget = picnicBudget(400);
console.log(totalBudget);



//probel 4:

const friends = ['Rana', 'Samirun', 'Shuvo', 'Sakibul', 'Supto', 'Samiul'];
function oddFriend(friends) {
    for (const char of friends) {
        if (char.length % 2 != 0) {
            return char;
        }

    }
}
let firstOddFriends = oddFriend(friends);
console.log(firstOddFriends);