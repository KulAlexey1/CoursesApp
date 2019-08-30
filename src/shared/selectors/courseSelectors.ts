import { createSelector } from "reselect";
import { IAppState } from "@shared/types/redux/IAppState";
import { getAuthors } from "@shared/selectors/authorSelectors";
import { ICourses } from "@shared/types/models/ICourses";
import { IAuthor } from "@shared/types/models/IAuthor";

const coursesSelector = (state: IAppState) => state.courses;

export const getCourses = createSelector(
    coursesSelector,
    courses => courses
);

export const getCoursesWithAuthors = createSelector(
    getCourses,
    getAuthors,
    (courses, authors) =>
        courses.map(function(course) {
            course.author = authors.find(
                author => author.id === course.authorId
            ) as IAuthor;

            return course;
        })
);
