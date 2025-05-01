import "./App.css";

import { JsonForms } from "@jsonforms/react";
import { vanillaRenderers } from "@jsonforms/vanilla-renderers";

import { data, schema } from "./schema/schema";
import { uischema } from "./schema/uiSchema";

// ---- tes custom renderers ----
import ReadOnlyStringRenderer from "./components/ReadOnlyStringRenderer";
import { readOnlyStringRendererTester } from "./renderers/ReadOnlyStringRenderer.tester";

import ReadOnlyMultilineRenderer from "./components/ReadOnlyMultilineRenderer";
import { readOnlyMultilineRendererTester } from "./renderers/ReadOnlyMultilineRenderer.tester";

import ReadOnlyEnumRenderer from "./components/ReadOnlyEnumRenderer";
import { readOnlyEnumRendererTester } from "./renderers/ReadOnlyEnumRenderer.tester";

import ReadOnlyCountryPercentRenderer from "./components/ReadOnlyCountryPercentRenderer";
import { readOnlyCountryPercentRendererTester } from "./renderers/ReadOnlyCountryPercentRenderer.tester";
// -------------------------------

const customRenderers = [
  { tester: readOnlyCountryPercentRendererTester, renderer: ReadOnlyCountryPercentRenderer },
  { tester: readOnlyEnumRendererTester,           renderer: ReadOnlyEnumRenderer },
  { tester: readOnlyMultilineRendererTester,      renderer: ReadOnlyMultilineRenderer },
  { tester: readOnlyStringRendererTester,         renderer: ReadOnlyStringRenderer }
];

export default function App() {
  return (
    <div className="App" style={{ padding: 16 }}>
      <h1>JsonForms Read-Only Challenge</h1>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={[...customRenderers, ...vanillaRenderers]}
      />
    </div>
  );
}
