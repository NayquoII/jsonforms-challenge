import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import "../styles/ReadOnlyStyles.css";

const ReadOnlyEnumRenderer = ({ data, label, description }: ControlProps) => {
    if (!data || (Array.isArray(data) && data.length === 0)) return null;

    const isMulti = Array.isArray(data);

    return (
        <div className="field two-column">
            <div className="question-label">
                {label}
                {description && (
                    <div className="question-description">{description}</div>
                )}
            </div>
            <div className="response">
                {isMulti ? (
                    data.map((value: string, index: number) => (
                        <span key={index} className="badge">
                            {value}
                        </span>
                    ))
                ) : (
                    <span className="badge">{data}</span>
                )}
            </div>
        </div>
    );
};

export default withJsonFormsControlProps(ReadOnlyEnumRenderer);
