import React from "react";
import { shallow } from "enzyme";
import IconInfo from "./IconInfo.svg";
describe("IconInfo", () => {
  it("matches snapshot", () => {
    
    const aIconInfo = shallow(<IconInfo />).find("IconInfo.svg").dive();
    console.log(aIconInfo.debug())
    expect(aIconInfo).toMatchSnapshot();
  });
});