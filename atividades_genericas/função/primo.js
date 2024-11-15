
function primo() {
    let num = Number(prompt("digite um numero: "));
    let divisor = []
    if (isNaN(num)) {
        alert("por favor digite novamente.")
    }else {
        for (let i = 0; i <= num; i++) {
            if (num % i == 0) {
                divisor.push(i)
            }
        }
        if (divisor.length == 2) {
            console.log("true")
            return true;
        }else {
            console.log("false")
            console.log(divisor)  
            return false;
        }
    }
}
