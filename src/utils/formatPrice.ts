const formatPrice = (price: number | string): string => {
  if (!+price && +price !== 0) {
    return null;
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatPrice;
