
function SnailGoesUp (hightOfStep: number, lenghtOfStep: number, towerHight: number) {
    console.log(towerHight/hightOfStep * lenghtOfStep + towerHight);
}

function Equality(a: number, b: number, c: number) {
    if (a == b && a == c) {
        console.log(3);
    } else if (a == b || a == c || b == c) {
        console.log(2);
    } else {
        console.log(0);
    }
}

function IsTriangle(a: number, b: number, c: number) {
    if (a + b > c && a + c > b && b + c > a) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function SliceOfPiece(slices: number, recepients: number, perReceSlice: number) {
    if (recepients * perReceSlice >= slices) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function MultiplyByLength (arr: number[]) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * arr.length);
    }
}

function IsPalindrome(str: string) {
    console.log(str === str.split("").reverse().join(""));
}

function RockPaperScissors(p1: string, p2: string) {

    if (p1 == p2) {
        console.log("TIE");
    } else if (p1 == "rock" && p2 == "scissors" || 
        p1 == "paper" && p2 == "rock" || p1 == "scissors" && p2 == "paper") {
        console.log("Player 1 wins");
    } else {
        console.log("Player 2 wins");
    }
}

function MaxAndMin(arr: number[]) {
    var sortedArr = arr.sort((n1, n2) => n1 - n2);

    console.log(Math.abs(sortedArr[0] - sortedArr[sortedArr.length - 1]));
}

function WarOfNumbers(arr: number[]) {
    var odd: number = 0;
    var even: number = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }

    console.log(odd > even ? odd - even : even - odd);
}

function EndsWith(str: string, strEnd: string) {
    console.log(str.substring(str.length - strEnd.length, str.length) == strEnd);
}

function CanRockAttack(str1: string, str2: string) {
    console.log(str1[0] == str2[0] || str1[1] == str2[1]);
}
