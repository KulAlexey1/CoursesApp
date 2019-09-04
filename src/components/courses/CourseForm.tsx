import React from "react";
import TextInput from "@components/common/TextInput";
import SelectInput from "@components/common/SelectInput";
import { ICourse } from "@shared/types/models/ICourse";
import { IAuthors } from "@shared/types/models/IAuthors";

type Props = {
    course: ICourse;
    authors: IAuthors;
    onSave: React.FormEventHandler<HTMLFormElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    saving: boolean;
    errors: {
        onSave: string;
        title: string;
        author: string;
        category: string;
    };
} & typeof defaultProps;

const defaultProps = {
    saving: false,
    errors: { onSave: "", title: "", author: "", category: "" }
};

const CourseForm = (props: Props) => {
    return (
        <form onSubmit={props.onSave}>
            {props.errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {props.errors.onSave}
                </div>
            )}
            <TextInput
                name="title"
                label="Title"
                value={props.course.title}
                placeholder="Enter title"
                onChange={props.onChange}
                error={props.errors.title}
            />

            <SelectInput
                name="authorId"
                label="Author"
                value={props.course.authorId.toString() || ""}
                defaultOption="Select Author"
                options={props.authors.map(author => ({
                    value: author.id.toString(),
                    text: author.name
                }))}
                onChange={props.onChange}
                error={props.errors.author}
            />

            <TextInput
                name="category"
                label="Category"
                value={props.course.category}
                placeholder="Enter category"
                onChange={props.onChange}
                error={props.errors.category}
            />

            <button
                type="submit"
                disabled={props.saving}
                className="btn btn-primary"
            >
                {props.saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

CourseForm.defaultProps = defaultProps;

export default CourseForm;
