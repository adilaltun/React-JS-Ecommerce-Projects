import { userConfig } from "../configurations/configs"
import { IJwt } from "../models/IJwt"

export const userLogin = ( email: string, password: string ) => {
    const sendData = {
        email: email,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}
