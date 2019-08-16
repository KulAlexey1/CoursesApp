import * as React from "react";
import { connect } from "react-redux";
import { loadCoursesAsync } from "@redux/actions/courseActions";
import { IAppState } from "@shared/types/redux/IAppState";
import CourseList from "@components/courses/CourseList";
import { getCoursesWithAuthors } from "@shared/selectors/courseSelectors";
import { ThunkDispatch } from "redux-thunk";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";
import AppAction from "@shared/types/redux/actions";
import { bindActionCreators } from "redux";
import { loadAuthorsAsync } from "@redux/actions/authorActions";

type StateToProps = ReturnType<typeof mapStateToProps>;
function mapStateToProps(state: IAppState) {
    return {
        courses: getCoursesWithAuthors(state)
    };
}

type DispatchToProps = ReturnType<typeof mapDispatchToProps>;
function mapDispatchToProps(
    dispatch: ThunkDispatch<IAppState, ExtraArgument, AppAction>
) {
    return {
        loadCoursesAsync: bindActionCreators(loadCoursesAsync, dispatch),
        loadAuthorsAsync: bindActionCreators(loadAuthorsAsync, dispatch)
    };
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
            props.loadAuthorsAsync();
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
