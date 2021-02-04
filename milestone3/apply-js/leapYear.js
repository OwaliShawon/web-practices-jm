function leapYear(year){
    const vagsesh = year % 4;
    if(vagsesh == 0){
        return true;
        // console.log('its a leap year');
    }else{
        return false;
        // console.log('not leap year');
    }

}
