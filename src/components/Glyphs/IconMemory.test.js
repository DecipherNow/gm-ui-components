import React from "react";
import { shallow } from "enzyme";

import IconMemory from "./IconMemory.svg";

describe("IconMemory", () => {
  it("matches snapshot", () => {
    const aIconMemory = shallow(<IconMemory />);
    expect(aIconMemory).toMatchSnapshot();
  });
});