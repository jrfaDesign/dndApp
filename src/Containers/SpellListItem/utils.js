export function checkNumber (num) {
    if (num === 1){
        return `${num}st`
    }
    if(num === 2){
        return `${num}nd`
    }
    if(num === 3){
        return `${num}rd`
    }
    if (num === 0){
        return "Cantrip"
    }
    else{
        return `${num}th`
    }
}