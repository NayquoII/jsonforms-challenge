import { rankWith, and, isControl, schemaMatches } from "@jsonforms/core";

export const readOnlyEnumRendererTester = rankWith(
    11,
    and(
        isControl,
        schemaMatches(
            (schema) =>
                (schema.type === "string" && !!schema.enum) ||
                (schema.type === "array" &&
                    schema.items !== undefined &&
                    "enum" in schema.items)
        )
    )
);
