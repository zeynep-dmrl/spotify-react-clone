function secondToTime(seconds){
    return new Date(1000 * seconds)
    .toISOString()
    .substr(11,8)
}
export{
    secondToTime
}