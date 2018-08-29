import React from "react";
import { shallow } from "enzyme";

import IconPlus from "./IconPlus";

describe("IconPlus", () => {
  it("matches snapshot", () => {
    const aIconPlus = shallow(<IconPlus />);
    expect(aIconPlus).toMatchSnapshot();
  });
});