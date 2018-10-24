import React from "react";
import { shallow } from "enzyme";

import IconStar from "./IconStar.svg";

describe("IconStar", () => {
  it("matches snapshot", () => {
    const aIconStar = shallow(<IconStar />);
    expect(aIconStar).toMatchSnapshot();
  });
});