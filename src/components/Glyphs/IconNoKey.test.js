import React from "react";
import { shallow } from "enzyme";

import IconNoKey from "./IconNoKey.svg";

describe("IconNoKey", () => {
  it("matches snapshot", () => {
    const aIconNoKey = shallow(<IconNoKey />);
    expect(aIconNoKey).toMatchSnapshot();
  });
});