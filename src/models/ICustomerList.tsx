export interface ICustomerList {
    result: CustomerList;
}

export interface CustomerList {
    createdBy:        string;
    createdDate:      Date;
    lastModifiedBy:   string;
    lastModifiedDate: Date;
    userId:              number;
    userName:        string;
    userSurname:         string;
    email:            string;
    password:         string;
    enabled:          boolean;
    tokenExpired:     boolean;
}