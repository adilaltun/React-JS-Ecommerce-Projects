import { userConfig } from "../configurations/configs"
import { ICustomerList } from "../models/ICustomerList"
import { IJwt } from "../models/IJwt"


export const userList = () => {
    return userConfig.get<ICustomerList>('/user/list')
}

export const userListByUserId = (userId:number) => {
    return userConfig.get<IJwt>('/user/listByUserId/' + userId)
}