// 1:) feet to mile
function feetToMile(feet) {
    return feet/5280;
}
var feet = 5280;
var mile = feetToMile(feet);
console.log(mile, "mile");




// 2:) wood calculator
function woodCalculator(chair, table, bed){
    var totalWood = chair + table*3 + bed*5;
    return totalWood;
}
var chairTableBed = woodCalculator(14,5,12);
console.log(chairTableBed);




// 3:) brick calculator
function brickCalculator(number){
    if(number <= 10){
        return number * (15*1000)
    }
    else if(number <= 20){
        return (10* 15000) + ((number-10) * 12000)
    }
    else{
        return (10* 15000) + (10 * 12000) + ((number-20) * 10000)
    }
}
console.log(brickCalculator(45));




// 4:) tiny friend
function tinyFriend(array){
    var friend = array[0];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if(element.length < friend.length){
            friend = element;
        }
    }
    return friend
}
var friends = ["Mofiz","Abul","Manik","Mia"]
console.log(tinyFriend(friends));