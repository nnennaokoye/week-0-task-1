function isLeapYear(year) {
    if (year % 4 ==0){
        if (year % 100 != 0 || year % 400 == 0){
            return true
        }
    } else{
        return false
    }
    return year
}
console.log(isLeapYear(1980))

module.exports = isLeapYear;
