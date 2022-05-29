const currency = amount =>
  (amount ? amount / 100 : 0).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  })

export default currency
