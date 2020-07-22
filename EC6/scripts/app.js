let magDistance = (num1, num2) => {
    let x = num1[0];
    let y = num1[1];
    let x2 = num2[0];
    let y2 = num2[1];

    let tmp = (x2 - x)**2 + (y2 - y)**2;
    tmp = Math.sqrt(tmp);
    return tmp;
}

console.log(magDistance("00", "46"));