import { rankWith, and, isControl, schemaMatches } from "@jsonforms/core";

export const readOnlyCountryPercentRendererTester = rankWith(
    11,
    and(
        isControl,
        schemaMatches(
            (schema) =>
                schema.type === "array" &&
                schema.items !== undefined &&
                !Array.isArray(schema.items) &&
                schema.items.properties !== undefined &&
                "country" in schema.items.properties &&
                "percent" in schema.items.properties
        )
    )
);
