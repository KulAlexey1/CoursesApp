import { AuthorAction } from "@shared/types/redux/actions/AuthorActions";
import { CourseAction } from "@shared/types/redux/actions/CourseActions";

type AppAction = AuthorAction | CourseAction;

export default AppAction;
