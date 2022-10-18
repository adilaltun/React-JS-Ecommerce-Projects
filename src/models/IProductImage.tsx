export interface IProductImage {
    status: boolean;
    result: ProductImageDetail[] | number | ProductImageDetail;
}

export interface ProductImageDetail {
    imageId:  number;
    productId:  number;
    file: string;
}