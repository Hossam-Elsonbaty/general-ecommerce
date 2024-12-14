const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
  style: 'currency',
  currency: 'KWD',
})
const formatCurrency = (number)=> {
  return CURRENCY_FORMATTER.format(number)
}

export default formatCurrency;