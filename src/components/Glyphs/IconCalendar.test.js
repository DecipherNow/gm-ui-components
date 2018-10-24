import React from "react";
import { shallow } from "enzyme";

import IconCalendar from "./IconCalendar.svg";

describe("IconCalendar", () => {
  it("matches snapshot", () => {
    const aIconCalendar = shallow(<IconCalendar />);
    expect(aIconCalendar).toMatchSnapshot();
  });
});