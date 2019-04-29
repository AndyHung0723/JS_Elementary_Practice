function sort(arr) {
    var temp;
    for(var i = 0 ; i < arr.length-1 ; i++) {
        for(var j = 0 ; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function flatten(arr) {
    var result = [];

    for(var i = 0 ; i < arr.length ; i++) {
        if(typeof arr[i] == "object") {
            var temp = flatten(arr[i]);
            for(var j = 0 ; j < temp.length ; j++) {
                result.push(temp[j]);
            }
        }else {
            result.push(arr[i]);
        }
        
    }

    return result;
}

function tree(n) {
    var result = "";
    for(var i = 0 ; i < n ; i++) {
        for(var j = n-1-i ; j > 0 ; j--) {
            result += " ";
        }
        for(var j = 0 ; j < 2*i+1 ; j++) {
            result += "*"
        }
        result += "\n";
    }
    for(var i = 0 ; i < n ; i++) {
        for(var j = n-1 ; j > 0 ; j--) {
            result += " ";
        }
        result += "*\n"
    }

    console.log(result);
}

function winner(arr) {
    var o_win = false;
    var x_win = false;
    var isDraw = false;
    var temp = "";
    var temp2 = "";
    //橫線
    for(var i = 0 ; i < arr.length ; i++) {
        for(var j = 0 ; j < arr[i].length ; j++) {
            if(arr[i][j] == '') isDraw = true;
            temp += arr[i][j];
        }
        if(temp == "OOO") o_win = true;
        else if(temp == "XXX") x_win = true;
        temp = "";
    }
    //直線
    for(var i = 0 ; i < arr.length ; i++) {
        for(var j = 0 ; j < arr[i].length ; j++) {
            temp += arr[j][i];
        }
        if(temp == "OOO") o_win = true;
        else if(temp == "XXX") x_win = true;
        temp = "";
    }
    //對角
    for(var i = 0 ; i < arr.length ; i++) {
        for(var j = 0 ; j < arr[i].length ; j++) {
            if(i == j) {
                temp += arr[i][j];
            }
            if(i + j == arr.length - 1) {
                temp2 += arr[i][j];
            }
        }
    }
    
    if(temp == "OOO") o_win = true;
    else if(temp == "XXX") x_win = true;
    if(temp2 == "OOO") o_win = true;
    else if(temp2 == "XXX") x_win = true;


    if(isDraw || (o_win && x_win)) return 'draw';
    else if(o_win) return 'O';
    else if(x_win) return 'X';
}

function isPrime(n) {
    var isP = true;
    for(var i = 2 ; i < n ; i++) {
        if(n%i == 0) {
            isP = false;
        }
    }
    if(n == 1) isP = false;

    return isP;
}