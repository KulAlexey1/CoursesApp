import * as React from "react";
import { connect } from "react-redux";
import * as courseActions from "@redux/actions/courseActions";
import * as authorActions from "@redux/actions/authorActions";
import { IAppState } from "@shared/types/redux/IAppState";
import CourseList from "@components/courses/CourseList";
import { getAllCourses } from "@shared/selectors/courseSelectors";
import { getAllAuthors } from "@shared/selectors/authorSelectors";

type StateToProps = ReturnType<typeof mapStateToProps>;
function mapStateToProps(state: IAppState) {
    return {
        courses: getAllCourses(state),
        authors: getAllAuthors(state)
    };
}

type DispatchToProps = typeof mapDispatchToProps;
const mapDispatchToProps = {
    ...courseActions,
    ...authorActions
};

type Props = StateToProps & DispatchToProps;

const CoursesPage: React.FC<Props> = props => {
    const createCourse = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        props.createCourse({
            id: "testid",
            name: "testname",
            author: {
                id: "authorTestId",
                firstName: "testFirstName",
                middleName: "testMiddleName",
                lastName: "testLastName",
                fullName: "testFullName"
            }
        });
    };

    return (
        <section>
            <header>Courses</header>
            <section>
                <a href="#" onClick={createCourse}>
                    Create course
                </a>
            </section>
            <CourseList courses={props.courses} />
        </section>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
