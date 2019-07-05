import * as React from "react";
import { connect } from "react-redux";
import * as createReactClass from "create-react-class";
import * as courseActionCreators from "../../redux/actions/courseActions";
import * as authorActionCreators from "../../redux/actions/authorActions";

const CoursesPage = createReactClass({
    componentDidMount() {
        const { courses, authors, actions } = this.props;
        actions.createCourse();
    },
    render() {
        return (
            <section>
                <header>
                    <h1>Courses</h1>
                </header>
                <article />
            </section>
        );
    }
});

function mapStateToProps(state: any) {
    return {
        courses: state.courses,
        authors: state.authors
    };
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
