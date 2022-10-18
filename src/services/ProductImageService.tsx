import { siteConfig } from "../configurations/configs"
import { IProductImage } from "../models/IProductImage"

// image add
export const imageAdd = ( productId: number, file: string ) => {
    const sendData = {
        productId: productId,
        file: file
    }
    return siteConfig.post<IProductImage>('image/add', sendData)
}

// image list
export const imageList = ( productId: number ) => {
    return siteConfig.get<IProductImage>('image/list/'+ productId)
}

// image delete
export const imageDelete = ( imageId: number ) => {
    return siteConfig.get<IProductImage>('image/delete/'+ imageId)
}