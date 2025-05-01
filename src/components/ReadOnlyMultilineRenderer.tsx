import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import "../styles/ReadOnlyStyles.css";

const ReadOnlyMultilineRenderer = ({
    data,
    label,
    description,
}: ControlProps) => {
    if (!data) return null;
    return (
        <div className="field full-width">
            <div className="question-label">{label}</div>
            {description && (
                <div className="question-description">{description}</div>
            )}
            <div className="response multiline">{data}</div>
        </div>
    );
};

export default withJsonFormsControlProps(ReadOnlyMultilineRenderer);
