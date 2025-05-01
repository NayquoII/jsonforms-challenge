import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import "../styles/ReadOnlyStyles.css";

const ReadOnlyCountryPercentRenderer = ({
    data,
    label,
    description,
}: ControlProps) => {
    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <div className="field full-width">
            <div className="question-label">{label}</div>
            {description && (
                <div className="question-description">{description}</div>
            )}
            <table className="country-table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, idx: number) => (
                        <tr key={idx}>
                            <td>{row.country}</td>
                            <td>{row.percent}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default withJsonFormsControlProps(ReadOnlyCountryPercentRenderer);
