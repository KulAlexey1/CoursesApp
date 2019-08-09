import * as React from "react";
import { connect } from "react-redux";
import { loadCoursesAsync } from "@redux/actions/courseActions";
import { IAppState } from "@shared/types/redux/IAppState";
import CourseList from "@components/courses/CourseList";
import { getAllCourses } from "@shared/selectors/courseSelectors";
import { getAllAuthors } from "@shared/selectors/authorSelectors";
import { ThunkDispatch } from "redux-thunk";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";
import AppAction from "@shared/types/redux/actions";
import { bindActionCreators } from "redux";

type StateToProps = ReturnType<typeof mapStateToProps>;
function mapStateToProps(state: IAppState) {
    return {
        courses: getAllCourses(state),
        authors: getAllAuthors(state)
    };
}

type DispatchToProps = ReturnType<typeof mapDispatchToProps>;
function mapDispatchToProps(
    dispatch: ThunkDispatch<IAppState, ExtraArgument, AppAction>
) {
    return { loadCoursesAsync: bindActionCreators(loadCoursesAsync, dispatch) };
}

type Props = StateToProps & DispatchToProps;

const CoursesPage: React.FC<Props> = props => {
    const createCourse = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // props.createCourse({
        //     id: "testid",
        //     name: "testname",
        //     author: {
        //         id: "authorTestId",
        //         firstName: "testFirstName",
        //         middleName: "testMiddleName",
        //         lastName: "testLastName",
        //         fullName: "testFullName"
        //     }
        // });
    };

    React.useEffect(() => {
        if (props.courses && props.courses.length == 0) {
            props.loadCoursesAsync();
        }
    }, []);

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
