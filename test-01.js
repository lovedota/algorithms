
/*
 * Complete the function below.
 * Calculate the minimum operations need to increase from 0 to a nValues by using ADD_1 and MULTIPLY_2 operations
 */
function MinOperations(target) {
    var values = {
        result: 0,
        target: target,
        plusCount: 0,
        multiplyCount: 0,
        messages: []
    };

    calculate(values);

    console.log('To increase from 0 to ' + target);
    console.log('We need to ADD_1: ' + values.plusCount + ' times and MULTIPLY_2: ' + values.multiplyCount + ' times');
    values.messages.forEach(function(message) {
        console.log(message);
    });
    console.log('-----------------------END-----------------------');
}

function calculate(values) {
    if (values.target % 2 === 0) {
        values.messages.unshift('MULTIPLY_2 to ' + values.target);
        values.target /= 2;
        values.multiplyCount += 1;
    } else {
        values.messages.unshift('PLUS_1 to ' + values.target);
        values.target -= 1;
        values.plusCount += 1;
    }

    if (values.target > 0) {
        calculate(values);
    }
}

MinOperations(5);
MinOperations(121);
MinOperations(13);
MinOperations(100);