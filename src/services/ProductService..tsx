import { siteConfig } from "../configurations/configs"
import { IProduct } from "../models/IProduct"

//product save
export const productSave= ( productId: number, categoryId:number, productName: string, productDetail:string, productPrice:number ) => {
    const sendData = {
        productId:productId,
        categoryId:categoryId,
        productName: productName,
        productDetail:productDetail,
        productPrice:productPrice,
        
    }
    return siteConfig.post<IProduct>('/product/save', sendData)
}

//product list
export const productList = () => {
    return siteConfig.get<IProduct>('/product/list')
}

//product delete
export const productDelete = (productId: number) => {
    return siteConfig.delete<IProduct>('/product/delete/'+ productId)
}

//product-image list  
export const getImagesByProduct = () => {
    return siteConfig.get<IProduct>('/product/getImagesByProduct')
}

//find image by pid
export const findImageWithProductId = (productId : number) => {
    return siteConfig.get<IProduct>('/product/findImageWithProductId/'+ productId)
}

//product image with category id
export const findProductWithCategory = (categoryId: number) => {
    return siteConfig.get<IProduct>('/product/findProductWithCategory/'+ categoryId)
}

//product search 
export const searchProduct = (q: string) => {
    return siteConfig.get<IProduct>('/product/searchProduct?q='+ q)
}

//find product with product id
export const findProductById = (productId: number) => {
    return siteConfig.get<IProduct>('/product/findProductById/'+ productId)
}








