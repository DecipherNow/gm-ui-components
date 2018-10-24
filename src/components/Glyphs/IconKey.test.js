import React from "react";
import { shallow } from "enzyme";

import IconKey from "./IconKey.svg";

describe("IconKey", () => {
  it("matches snapshot", () => {
    const aIconKey = shallow(<IconKey />);
    expect(aIconKey).toMatchSnapshot();
  });
});