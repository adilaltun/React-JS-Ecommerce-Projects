import { userConfig } from "../configurations/configs"
import { IRegister } from "../models/IRegister"

//User Register
export const userRegister = ( userName:string, userSurname:string, email:string, password:string) => {
    const sendParams = {
        userName:userName,
        userSurname:userSurname,
        email:email,
        password:password,
        enable:true,
        tokenExpired:true,
        roles:[
            {roleId:2,roleName:"ROLE_customer"}
        ]
    }
    return userConfig.post<IRegister>('user/register', sendParams)
}