const HU = {
  date: d => new Intl.DateTimeFormat('hu-HU').format(d),
  currency: amount => new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF'
  }).format(amount),
  curreny(amount) {
    return this.currency(amount);
  },
  list: arrayOfStrings => arrayOfStrings.length <= 2 ? arrayOfStrings.join(' és ') : arrayOfStrings.reduce((prev, e, i) => i == 0 ? e :
    i == arrayOfStrings.length - 1 ? `${prev} és ${e}` : `${prev}, ${e}`, '')
};

export default HU