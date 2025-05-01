import {
    rankWith,
    and,
    isControl,
    schemaTypeIs,
    optionIs,
} from "@jsonforms/core";

export const readOnlyMultilineRendererTester = rankWith(
    11,
    and(isControl, schemaTypeIs("string"), optionIs("multi", true))
);
