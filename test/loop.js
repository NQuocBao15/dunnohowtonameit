let i = 1;
let count = 0;
let number = 5;
while(i <= number) {
    if (number % i == 0) {
        count++;
    }
    i++;
}
if (count == 2) {
    console.log("Là số nguyên tố")
} else {
    console.log("Không là số nguyên tố");
}