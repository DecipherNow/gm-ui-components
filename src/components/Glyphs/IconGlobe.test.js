import React from "react";
import { shallow } from "enzyme";
import IconGlobe from "./IconGlobe.svg";
describe("IconGlobe", () => {
  it("matches snapshot", () => {
    
    const aIconGlobe = shallow(<IconGlobe />).find("IconGlobe.svg").dive();
    console.log(aIconGlobe.debug())
    expect(aIconGlobe).toMatchSnapshot();
  });
});