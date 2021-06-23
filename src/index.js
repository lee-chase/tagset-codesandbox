import React from "react";
import { render } from "react-dom";

import "./index.scss";

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import "./config"; // must come before @carbon/ibm-cloud-cognitive... imports
import { TagSet } from "@carbon/ibm-cloud-cognitive";
import { types as tagTypes } from "carbon-components-react/es/components/Tag/Tag";
import { DisplayBox } from "./components/DisplayBox";

const tags = [];
for (let i = 0; i < 200; i++) {
  const label = `Label_${i + 1}`;
  const type = tagTypes[i % tagTypes.length];

  tags.push({ type, label });
}

const App = () => (
  <div className="app">
    <DisplayBox>
      <TagSet tags={tags} />
    </DisplayBox>
  </div>
);

render(<App />, document.getElementById("root"));
