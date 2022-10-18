export interface ICategory {
    status: boolean;
    result: CategoryInfo[];
}

export interface CategoryInfo {
    createdBy:        string;
    createdDate:      number;
    lastModifiedBy:   string;
    lastModifiedDate: number;
    categoryId:       number;
    categoryName:     string;
}
