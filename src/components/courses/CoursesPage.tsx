import * as React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { IAppState } from "../../shared/types/redux/IAppState";
import { ICourse } from "../../shared/types/models/ICourse";

type StateToProps = ReturnType<typeof mapStateToProps>;
function mapStateToProps(state: IAppState) {
    return { ...state };
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

    const articles: JSX.Element[] = [];
    for (let courseId in props.courses) {
        articles.push(
            <article id={courseId}>
                <header>{(props.courses[courseId] as any).name}</header>
                <p>TEST</p>
            </article>
        );
    }

    return (
        <section>
            <header>Courses</header>
            <a href="#" onClick={createCourse}>
                Create course
            </a>
            {articles}
        </section>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
