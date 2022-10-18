export interface IOrder {
    status: boolean;
    result: OrderDetail[];
}

export interface OrderDetail {
    orderId:      number;
    productId:    number;
    userId:       number;
    userName:     string;
    userSurname:  string;
    productName:  string;
    productPrice: number;
}
