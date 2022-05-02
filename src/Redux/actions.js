import { useDispatch } from "react-redux"
export const ORDER = "ORDER"
export const isAuth = "isAuth"
export const USER = "USER"


export function addUser(val) {
  return { type: USER, payload: val }
}
export function addOrder(val) {
  return { type: ORDER, payload: val }
}
export function toggleisAuth(val) {
  return { type: isAuth, payload: val }
}
