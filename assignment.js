

// https://github.com/Shuprov/problem-solving


//#Problem kilometer to meter converter

function kilometerToMeter(kilometer) {
    // We know, 1 kilometer=1000 meters
    var meters = kilometer * 1000;
    return meters;
}

var result = kilometerToMeter(21);
console.log(result);









//#Problem Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    //Each watch costs 50$
    var watchBudget = watch * 50;

    //Each phone costs 100$
    var phoneBudget = phone * 100;

    //Each laptop costs 500$
    var laptopBudget = laptop * 500;

    var totalBudget = watchBudget + phoneBudget + laptopBudget;
    return totalBudget;
}

var totalPrice = budgetCalculator(3, 5, 7);
console.log(totalPrice);













// #Problem Hotel Cost

function hotelCost(day) {
    var hotelExpenditure = 0;
    if (day <= 10) {
        //First 10 days cost 100$ per night
        hotelExpenditure = day * 100;
    }
    else if (day <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remainingDays = day - 10;
        // 11 to 20th days cost 80$ per night
        var secondPartCost = remainingDays * 80;
        hotelExpenditure = firstTenDaysCost + secondPartCost;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDays = day - 20;
        // More than 20 days cost 50$ per night
        var thirdPartCost = remainingDays * 50;
        hotelExpenditure = firstTenDaysCost + secondTenDaysCost + thirdPartCost;
    }
    return hotelExpenditure;

}

var totalCost = hotelCost(24);
console.log(totalCost);













// #Problem Mega Friend

function megaFriend(peopleName) {
    var max = 0;
    var megaName = "";
    for (var i = 0; i < peopleName.length; i++) {
        var element = peopleName[i];
        var characterLength = element.length;

        if (max < characterLength) {
            megaName = peopleName[i];
            max = characterLength;

        }

    }
    return megaName;
}

var friendsName = ["Ashik", "Shuprov", "Lemon", "Mehedi", "Nathan"];
var result = megaFriend(friendsName);
console.log(result);