import React from "react";

import Wrap from "./Wrap";

describe("Wrap", () => {
  it("matches snapshot", () => {
    const aWrap = shallow(<Wrap />);
    expect(aWrap).toMatchSnapshot();
  });
});
