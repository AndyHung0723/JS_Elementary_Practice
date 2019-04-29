function stars(n) {
    var sum = "";
    for(var i = 0 ; i < n ; i++) {
        for(var j = 0 ; j < i+1 ; j++) {
            sum += "*";
        }
        if(i != n-1)  sum += "\n";
    }

    console.log(sum);
}

function makeStars(n) {
    var sum = "";
    for(var i = 0 ; i < n ; i++) {
        for(var j = 0 ; j < i+1 ; j++) {
            sum += "*";
        }
        if(i != n-1) sum += "\\n";
    }

    return sum;
}

function stars2(n) {
    var sum = "";
    for(var i = 0 ; i < (2*n-1) ; i++) {
        if(i<n) {
            for(var j = 0 ; j < i+1 ; j++) {
                sum += "*";
            }
        }else {
            for(var j = 0 ; j < 2*n-(i+1) ; j++) {
                sum += "*";
            }
        }
        sum += "\n";
    }
    console.log(sum);
}

function table(n) {
    for(var i = 1 ; i < 10 ; i++) {
        console.log(n + "*" + i + " = " + (n*i));
    }
}

function table9to9() {
    for(var i = 1 ; i < 10 ; i++) {
        for(var j = 1 ; j < 10 ; j++) {
            console.log(i + "*" + j + "=" + (i*j));
        }
    }
}

function fib(n) {
    if(n > 2) {
        return fib(n-1) + fib(n-2);
    }else {
        return 1;
    }
}

function reverse(str) {
    var result = "";
    for(var i = str.length-1 ; i >= 0 ; i--) {
        result += str[i];
    }
    return result;
}

function swap(str) {
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";
    var result = "";

    for(var i = 0 ; i < str.length ; i++) {
        if(up.indexOf(str[i]) != -1) {
            result += low[up.indexOf(str[i])];
        }else {
            result += up[low.indexOf(str[i])];
        }
    }
    return result;
}

function findMin(arr) {
    var min = arr[0];

    for(var i = 1 ; i < arr.length ; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return min;
}

function findNthMin(arr, n) {
    var temp = "";
    for(var i = 0 ; i < arr.length-1 ; i++) {
        for(var j = 0 ; j < arr.length-1-i ; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr[n-1];
}