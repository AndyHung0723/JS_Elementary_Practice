function print1to9() {
    for(var i = 1 ; i <= 9 ; i ++) {
        console.log(i);
    }
}

function print(n) {
    for(var i = 1 ; i <= n ; i++) {
        console.log(i);
    }
}

function star(n) { 
    var sim = "";
    for(var i = 0 ; i < n ; i++) {
        sim += "*";
    }
    console.log(sim);
}

function starReturn(n) {
    var sim = "";
    for(var i = 0 ; i < n ; i++) {
        sim += "*";
    }
    return sim;
}

function isUpperCase(str) {
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    return up.indexOf(str.substring(0,1)) == -1 ? false : true;
}

function position(str) {
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(var i = 0 ; i < str.length ; i++) {
        if(up.indexOf(str.substring(i, i+1)) != -1) {
            return str.substring(i, i+1) + " " + i;
        }
    }

    return -1;
}

function findSmallCount(arr, n) {
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i] < n) {
            sum += 1;
        }
    }

    return sum;
}

function findSmallerTotal(arr, n) {
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i] < n) {
            sum += arr[i];
        }
    }

    return sum;
}

function findAllSmall(arr, n) {
    var result = [];
    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i] < n) {
            result.push(arr[i]);
        }
    }

    return result;
}

function sum(arr) {
    var total = 0;
    for(var i = 0 ; i < arr.length ; i++) {
        total += arr[i];
    }
    return total;
}