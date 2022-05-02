import { isAuth } from "./actions";
import { USER } from "./actions";
import { ORDER } from "./actions";
const init = { users: [], orders: [], isLoggedIn: false };


export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER: return { ...store, users: [...payload] }
    case ORDER: return { ...store, orders: [...payload] }
    case isAuth: return { ...store, isLoggedIn: payload }
    default:
      return store;
  }
};
