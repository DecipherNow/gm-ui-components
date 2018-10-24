import React from "react";
import { shallow } from "enzyme";

import IconFileSpreadsheet from "./IconFileSpreadsheet.svg";

describe("IconFileSpreadsheet", () => {
  it("matches snapshot", () => {
    const aIconFileSpreadsheet = shallow(<IconFileSpreadsheet />);
    expect(aIconFileSpreadsheet).toMatchSnapshot();
  });
});