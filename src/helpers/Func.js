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
  try {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      const user = JSON.parse(userData);
      return user;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error parsing user data");
    return false;
  }
};
