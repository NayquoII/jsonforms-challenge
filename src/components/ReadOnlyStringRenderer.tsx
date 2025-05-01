import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import "../styles/ReadOnlyStyles.css";

const ReadOnlyStringRenderer = ({ data, label }: ControlProps) => {
    if (data === undefined || data === null || data === "") return null;
    return (
        <div className="field two-column">
            <div className="question-label">{label}</div>
            <div className="response">{data}</div>
        </div>
    );
};

export default withJsonFormsControlProps(ReadOnlyStringRenderer);
