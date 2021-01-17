const reducer = (state, action) => {
  if (action.type === "LOADING") {
    console.log("fetching items");

    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    console.log("display items");
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }

  if (action.type === "CLEAR_CART") {
    console.log("clear cart");

    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "REMOVE") {
    console.log("remove a item");

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INC_DEC") {
    console.log("inc/dec item");

    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          if (action.inc === 1) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          } else {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "GET_TOTALS") {
    console.log("get totals");

    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return {
      ...state,
      total,
      amount,
    };
  }

  throw new Error("action type match not found");
};

export default reducer;
