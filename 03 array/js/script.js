console.log("Array")

function generateArray(start, end){
    let rangeArray = []

    for(let i = start; i <= end; i++){
        rangeArray.push(i)
    }

    return rangeArray
}

function printArray(masivs){
    for(let i = 0; i < masivs.length; i++){
        console.log(masivs[i])
    }
}

let data = generateArray(5, 17)
printArray(data)