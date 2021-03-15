module.exports = function toReadable (number) {
    const one = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const two = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number == 0) return "zero";
    if (number < 20) return one[number];
    if (number >= 20 && number < 100) return two[parseInt(number / 10)] + (number % 10 == 0 ? one[number % 10] : (" " + one[number % 10]));
    let numberString = number.toString();
    if (numberString[1] == "0" && numberString[2] == "0") {
        return one[parseInt(number / 100)] + " hundred";
    } else {
        return one[parseInt(number / 100)] + " hundred " + toReadable(parseInt(numberString[1] + numberString[2]));
    }
}
