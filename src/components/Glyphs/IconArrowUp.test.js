import React from "react";
import { shallow } from "enzyme";

import IconArrowUp from "./IconArrowUp.svg";

describe("IconArrowUp", () => {
  it("matches snapshot", () => {
    const aIconArrowUp = shallow(<IconArrowUp />);
    expect(aIconArrowUp).toMatchSnapshot();
  });
});