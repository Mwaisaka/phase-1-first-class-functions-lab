// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(int){
    const fare=function(int){
        return int*int;
    }
    return fare;
}
const fareDoubler = function(fare){
    const fn = (createFareMultiplier(fare)(2))*(fare/2);
            return fn;
};
const fareTripler = function(fare){
    const fn = (createFareMultiplier(fare)(3))*(fare/3);
    return fn;
};
function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}