import React from "react";
import { shallow } from "enzyme";

import IconObjectMove from "./IconObjectMove.svg";

describe("IconObjectMove", () => {
  it("matches snapshot", () => {
    const aIconObjectMove = shallow(<IconObjectMove />).find("IconObjectMove.svg");
    expect(aIconObjectMove).toMatchSnapshot();
  });
});