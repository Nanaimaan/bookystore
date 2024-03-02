export const calcTotalPrice = (products) => {
  let totalPrice = 0;
  products.map((product) => {
    totalPrice += +product.subPrice;
  });
  return totalPrice;
};

export const calcSubPrice = (item) => {
  const result = +item.count * +item.item.price;
  return result;
};
export const checkUser = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    return user;
  } else {
    return false;
  }
};
