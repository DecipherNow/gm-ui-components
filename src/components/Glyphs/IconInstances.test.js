import React from "react";
import { shallow } from "enzyme";

import IconInstances from "./IconInstances.svg";

describe("IconInstances", () => {
  it("matches snapshot", () => {
    const aIconInstances = shallow(<IconInstances />);
    expect(aIconInstances).toMatchSnapshot();
  });
});