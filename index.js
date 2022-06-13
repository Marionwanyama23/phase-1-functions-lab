function distanceFromHqInBlocks (blocknNumber) {
    if (blocknNumber > 42){
        return blocknNumber - 42
    }
    else {
        return 42 - blocknNumber
    }
}
function distanceFromHqInFeet (blocknNumber) {
    return distanceFromHqInBlocks (blocknNumber) * 264
}
function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    }
    else {
        return (start - destination) * 264
    }
}
function calculatesFarePrice (start, destination) {
    const feet = distanceTravelledInFeet ( start, destination)
    if (feet <= 400) {
        return 0
    } 
    else if (feet > 400 && feet < 2000){
        return 0.02 * (feet - 400)
    }
    else if (feet > 2000 && feet <2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}