import * as React from "react";
import { connect } from "react-redux";
import {
    loadCoursesAsync,
    createCourseAsync,
    editCourseAsync,
    deleteCourseAsync
} from "@redux/actions/courseActions";
import { IAppState } from "@shared/types/redux/IAppState";
import { ThunkDispatch } from "redux-thunk";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";
import AppAction from "@shared/types/redux/actions";
import { bindActionCreators } from "redux";
import { loadAuthorsAsync } from "@redux/actions/authorActions";
import CourseForm from "@components/courses/CourseForm";
import { RouteComponentProps } from "react-router";
import { ICourse } from "@shared/types/models/ICourse";
import { getAuthors } from "@shared/selectors/authorSelectors";

type RouterProps = {
    slug: string;
};

type StateToProps = ReturnType<typeof mapStateToProps>;
function mapStateToProps(
    state: IAppState,
    ownProps: RouteComponentProps<RouterProps>
) {
    return {
        course: (ownProps.match.params.slug
            ? state.courses.find(c => c.slug === ownProps.match.params.slug)
            : {
                  id: 0,
                  title: "",
                  slug: "",
                  authorId: 0,
                  author: undefined,
                  category: ""
              }) as ICourse,
        authors: getAuthors(state)
    };
}

type DispatchToProps = ReturnType<typeof mapDispatchToProps>;
function mapDispatchToProps(
    dispatch: ThunkDispatch<IAppState, ExtraArgument, AppAction>
) {
    return {
        loadCoursesAsync: bindActionCreators(loadCoursesAsync, dispatch),
        loadAuthorsAsync: bindActionCreators(loadAuthorsAsync, dispatch),
        createCourseAsync: bindActionCreators(createCourseAsync, dispatch),
        editCourseAsync: bindActionCreators(editCourseAsync, dispatch),
        deleteCourseAsync: bindActionCreators(deleteCourseAsync, dispatch)
    };
}

type Props = StateToProps & DispatchToProps;

const ManageCoursePage: React.FC<Props> = props => {
    const [course, setCourse] = React.useState<ICourse>({ ...props.course });

    React.useEffect(() => {
        console.log("test!!!!");
        if (!course.id) {
            loadCoursesAsync();
        }

        if (!props.authors || props.authors.length == 0) {
            loadAuthorsAsync();
        }
    }, []);

    function onSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!course.id) {
            props.createCourseAsync(course);
        } else {
            props.editCourseAsync(course);
        }
    }

    function onChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const [name, value] = [event.target.name, event.target.value];
        const newCourse = {
            ...course,
            [name]: name === "authorId" ? parseInt(value) : value
        };

        setCourse(newCourse);
    }

    return (
        <section>
            <header>
                <h2>{course.id ? "Edit" : "Add"} Course</h2>
            </header>
            <main>
                <CourseForm
                    course={course}
                    authors={props.authors}
                    onSave={onSave}
                    onChange={onChange}
                />
            </main>
        </section>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursePage);
