import { siteConfig } from "../configurations/configs"
import { ICategory } from "../models/ICategory"

//category save
export const categorySave= ( categoryId: number,categoryName: string ) => {
    const sendData = {
        categoryId:categoryId,
        categoryName: categoryName,
    }
    return siteConfig.post<ICategory>('category/save', sendData)
}

//category list
export const categoryList = ()  => {
    return siteConfig.get<ICategory>('category/list')
} 

//category delete 
export const categoryDelete = (categoryId: number) => {
    return siteConfig.delete<ICategory>('category/delete/'+categoryId)
}

//category update
export const categoryUpdate = (categoryId: number, categoryName: string ) => {
    const sendData = {
        categoryId:categoryId,
        categoryName: categoryName,
    }
    return siteConfig.put<ICategory>('category/update/', sendData)
}