
function print(a) {
    console.log(a)
}

let num1 = prompt("digite num1: ")
let num2 = prompt("digite num2: ")
let num3 = prompt("digite num3: ")

let caso1 = num1 > num2
let caso2 = num2 > num3
let caso3 = num3 > num1


if(caso1) {
    if(caso2){
        if(caso3){
            print("não existe")
        }else {
            print("num1 maior")
        }
    }else {
        if(caso3){
            print("num3 maior")
        }else {
            print("num1 maior")
        }
    }
}else {
    if(caso2){
        if(caso3){
            print("num2 maior")
        }else {
            print("num2 maior")
        }
    }else {
        if (caso3) {
            print("num3 maior")
        }else {
            print("não existe")
        }
    }
}