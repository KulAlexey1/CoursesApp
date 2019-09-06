import * as React from "react";
import { connect } from "react-redux";
import { loadCoursesAsync } from "@redux/actions/courseActions";
import { IAppState } from "@shared/types/redux/IAppState";
import { getCoursesWithAuthors } from "@shared/selectors/courseSelectors";
import { ThunkDispatch } from "redux-thunk";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";
import AppAction from "@shared/types/redux/actions";
import { bindActionCreators } from "redux";
import { loadAuthorsAsync } from "@redux/actions/authorActions";
import { ICourse } from "@shared/types/models/ICourse";
import { NavLink, Redirect } from "react-router-dom";

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
    const [state, setState] = React.useState({
        redirectToAddCoursePage: false
    });

    React.useEffect(() => {
        if (!props.courses || props.courses.length == 0) {
            props.loadCoursesAsync();
            props.loadAuthorsAsync();
        }
    }, []);

    return (
        <>
            {state.redirectToAddCoursePage && <Redirect to="/course" />}
            <header>Courses</header>

            <section>
                <button
                    style={{ marginBottom: 20 }}
                    className="btn btn-primary add-course"
                    onClick={() => setState({ redirectToAddCoursePage: true })}
                >
                    Add Course
                </button>
            </section>

            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Category</td>
                        <td>Author</td>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map((course: ICourse) => (
                        <tr
                            key={course.id}
                            id={"course-" + course.id.toString()}
                        >
                            <td>
                                <NavLink to={"/course/" + course.slug}>
                                    {course.title}
                                </NavLink>
                            </td>
                            <td>{course.category}</td>
                            <td>{course.author ? course.author.name : ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
