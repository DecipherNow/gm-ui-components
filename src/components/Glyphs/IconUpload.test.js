import React from "react";
import { shallow } from "enzyme";

import IconUpload from "./IconUpload";

describe("IconUpload", () => {
  it("matches snapshot", () => {
    const aIconUpload = shallow(<IconUpload />);
    expect(aIconUpload).toMatchSnapshot();
  });
});