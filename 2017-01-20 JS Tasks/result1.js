const fizzbuzz = function (selector, count) {
    var result = [];
    for (var i = 0; i <= count; i++) {
        switch (true) {
            case (i == 0):
                result.push(i);
                break;
            case (i % 15 == 0):
                result.push('FizzBuzz');
                break;
            case (i % 3 == 0):
                result.push('Fizz');
                break;
            case (i % 5 == 0):
                result.push('Buzz')
                break;
            default:
                result.push(i);
                break;
        }
    };
    document.querySelector(selector).innerHTML = result.join();
};
fizzbuzz('#result1', 30);


const countdown = function (selector, count, time) {
    var i = count;
    var timerId = setInterval(function () {
        document.querySelector(selector).innerHTML = i;
        if (i == 0) clearInterval(timerId);
        i--;
    }, time);
};
countdown('#result2', 5, 500) ;


const sort = function (input, output) {
    var arr = document.querySelector(input).innerHTML.split(',');
    arr.sort(function (a, b) {
        return a - b
    });
    document.querySelector(output).innerHTML = arr.join(', ');
};
sort('#input3', '#result3');