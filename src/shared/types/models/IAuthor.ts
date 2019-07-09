import { IGuidId } from "./IGuidId";

export interface IAuthor extends IGuidId {
    firstName: string;
    middleName: string;
    lastName: string;

    fullName: string;
}
