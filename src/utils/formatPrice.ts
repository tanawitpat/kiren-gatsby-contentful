const formatPrice = (price: number | string): string => {
  const numberPrice = +price;

  if (!numberPrice && numberPrice !== 0) {
    return null;
  }

  const priceTwoDecimal = numberPrice.toFixed(2);

  return priceTwoDecimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatPrice;
