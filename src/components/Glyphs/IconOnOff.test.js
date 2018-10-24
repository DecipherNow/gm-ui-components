import React from "react";
import { shallow } from "enzyme";
import IconOnOff from "./IconOnOff.svg";
describe("IconOnOff", () => {
  it("matches snapshot", () => {
    
    const aIconOnOff = shallow(<IconOnOff />).find("IconOnOff.svg").dive();
    console.log(aIconOnOff.debug())
    expect(aIconOnOff).toMatchSnapshot();
  });
});