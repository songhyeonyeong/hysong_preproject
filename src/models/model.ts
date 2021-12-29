export interface chartParam {
  time: string,
  amount?: number
}
export interface orderParam {
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
}
