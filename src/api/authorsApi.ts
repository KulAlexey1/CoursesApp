import { api } from "./apiUtils";
import { IAuthors } from "@shared/types/models/IAuthors";

export function getAuthors(): Promise<IAuthors> {
    return api(process.env.API_URL + "/authors");
}
