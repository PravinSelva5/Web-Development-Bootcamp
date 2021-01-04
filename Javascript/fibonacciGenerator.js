function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:
    var output = [];

    if (n === 1){
            output.push(0);
            return output;
        }

    if ( n > 1){
        output.push(0,1);
    }

    for (var i = 2; i < n; i++){

            output.push(output[i-2] + output[i-1]);
    }

    return output;

    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}
