import * as React from "react";
import { connect } from "react-redux";
import * as createReactClass from "create-react-class";
import * as courseActionCreators from "../../redux/actions/courseActions";
import * as authorActionCreators from "../../redux/actions/authorActions";
import { State } from "../../types/redux/State";

const CoursesPage = createReactClass({
    componentDidMount() {
        const { courses, authors, ...actions } = this.props;
        console.log(courses);
    },
    render() {
        const articles = [];
        for (const course in this.courses) {
            articles.push(
                <article id={(course as any).id}>
                    <header>{(course as any).name}</header>
                    <p>TEST</p>
                </article>
            );
        }
        console.log(typeof this.courses);

        return (
            <section>
                <header>Courses</header>
                <a
                    onClick={() =>
                        this.createCourse({
                            id: "testid",
                            name: "testname",
                            author: {
                                firstName: "testFirstName",
                                middleName: "testMiddleName",
                                lastName: "testLastName",
                                fullName: "testfullName"
                            }
                        })
                    }
                >
                    Create course
                </a>
                {articles}
            </section>
        );
    }
});

function mapStateToProps(state: State) {
    return { ...state };
}

const mapDispatchToProps = {
    actions: {
        ...courseActionCreators,
        ...authorActionCreators
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
