export interface IProduct {
    status: boolean;
    result: ProductInfo[];
}

export interface ProductInfo {
    createdBy:        string;
    createdDate:      number;
    lastModifiedBy:   string;
    lastModifiedDate: number;
    productId:        number;
    imageId:          number;
    categoryId:       number; 
    productName:      string;
    categoryName:     string;
    productDetail:    string;
    productPrice:     number;
    file:             string;
}
