// The following functions are templates used to scaffold out a basic component starter

function componentTemplate(fileName) {
  return `import React from "react";
import { PropTypes } from "prop-types";

${fileName}.propTypes = {};

${fileName}.defaultProps = {};

/**
 * Description of your component
 */
export default function ${fileName}(props) {
  return <div />;
}

${fileName}.displayName = "${fileName}";
`;
}

function indexTemplate(fileName) {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
}

function testTemplate(fileName) {
  return `import React from "react";


import ${fileName} from "./${fileName}";

describe("${fileName}", () => {
  it("matches snapshot", () => {
    const a${fileName} = shallow(<${fileName} />);
    expect(a${fileName}).toMatchSnapshot();
  });
});`;
}

function storyTemplate(fileName) {
  return `import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import ${fileName} from "./${fileName}";

const stories = storiesOf("Components|${fileName}", module);

stories.add(
  "default",
  () => {
    return <${fileName} />;
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
`;
}

module.exports = {
  componentTemplate,
  indexTemplate,
  testTemplate,
  storyTemplate
};
