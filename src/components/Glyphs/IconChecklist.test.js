import React from "react";
import { shallow } from "enzyme";

import IconChecklist from "./IconChecklist";

describe("IconChecklist", () => {
  it("matches snapshot", () => {
    const aIconChecklist = shallow(<IconChecklist />);
    expect(aIconChecklist).toMatchSnapshot();
  });
});