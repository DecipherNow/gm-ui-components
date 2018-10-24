import React from "react";
import { shallow } from "enzyme";
import IconCollapse from "./IconCollapse.svg";
describe("IconCollapse", () => {
  it("matches snapshot", () => {
    
    const aIconCollapse = shallow(<IconCollapse />).find("IconCollapse.svg").dive();
    console.log(aIconCollapse.debug())
    expect(aIconCollapse).toMatchSnapshot();
  });
});