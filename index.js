function produceDrivingRange(blockRange){
    return function(start, end){
        let distance = parseInt(end) - parseInt(start)
        let range = Math.abs(blockRange - distance)
        let block = (range > 1) ? "blocks" : "block"

        return (distance > blockRange) ? `${range} ${block} out of range` : `within range by ${range}`
    }
};

function produceTipCalculator(percentage){
    return function(bill){
        return Math.abs(percentage * bill)
    }
};

function createDriver(){
    let driverId = 0
    return class {
        constructor(name){
        this.name = name
        this.id = ++driverId
        }
    }
}