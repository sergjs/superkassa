export const maxLength  = (values) => { 
    if (values.length > 10) return "Длина номера телефона не более 10 символов";
    if (values.length < 3) return "Длина номера телефона не менее 3 символов ";
    return undefined
}
export const requiredField = (values) => {
    if (!values) {
        return  'Необходимо заполнить'
      } else if (isNaN(Number(values))) {
        values =  'Только цифры'
      } return undefined
}