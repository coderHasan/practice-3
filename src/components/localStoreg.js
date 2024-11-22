const getCart = () => {
  const getNew = localStorage.getItem("cart");
  if (getNew) {
    return JSON.parse(getNew);
  }
  return [];
};

const saveCard = (id) => {
  const cart = getCart();
  cart.push(id);

  const string = JSON.stringify(cart);
  localStorage.setItem(string, "catr");
};

console.log(saveCard());
