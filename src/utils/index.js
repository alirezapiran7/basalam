export const currencyFormat = (num) => {
    return   num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "تومان"
}
export const weightFormat = (num) => {    
    return   num.toString()+ "گرم"
}