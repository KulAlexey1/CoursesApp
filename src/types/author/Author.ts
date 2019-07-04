import { GuidId } from "./../shared/GuidId";

export interface Author extends GuidId {
    firstName: string;
    middleName: string;
    lastName: string;

    fullName: string;
}
