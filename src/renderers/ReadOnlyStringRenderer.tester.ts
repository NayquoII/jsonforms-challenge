import { rankWith, isControl, schemaTypeIs, and } from "@jsonforms/core";

export const readOnlyStringRendererTester = rankWith(
    10,
    and(isControl, schemaTypeIs("string"))
);
