export interface IRegister {
    status: boolean;
    result: Result;
}

export interface Result {
    createdBy:        string;
    createdDate:      number;
    lastModifiedBy:   string;
    lastModifiedDate: number;
    userId:           number;
    userName:         string;
    userSurname:      string;
    email:            string;
    password:         string;
    enabled:          boolean;
    tokenExpired:     boolean;
    roles:            Role[];
}

export interface Role {
    roleId:   number;
    roleName: string;
    users:    null;
}