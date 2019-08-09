import { api } from "./apiUtils";
import { ICourses } from "@shared/types/models/ICourses";

export function getCourses(): Promise<ICourses> {
    return api(process.env.API_URL + "/courses");
}
