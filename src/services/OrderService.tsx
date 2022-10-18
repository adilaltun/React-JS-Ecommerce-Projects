import { siteConfig } from "../configurations/configs"
import { IOrder } from "../models/IOrder"

//order save
export const orderSave = ( userId: number, productId:number ) => {
    const sendData = {
        userId: userId,
        productId:productId
    }
    return siteConfig.post<IOrder>('/order/save', sendData)
}

//order list
export const orderListOrders = () => {
    return siteConfig.get<IOrder>('/order/listOrders')
}

//order delete
export const orderDelete = (orderId:number) => {
    return siteConfig.delete<IOrder>('/order/delete/'+orderId)
}

//order detail (userId)
export const getOrderById = (userId:number) => {
    return siteConfig.get<IOrder>('/order/getOrderById/'+userId)
}

//order update 
export const orderUpdate = ( orderId:number ,userId: number, productId:number ) => {
    const sendData = {
        orderId:orderId,
        userId: userId,
        productId:productId
    }
    return siteConfig.put<IOrder>('/order/update', sendData)
}