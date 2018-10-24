import React from "react";
import { shallow } from "enzyme";
import IconScale from "./IconScale.svg";
describe("IconScale", () => {
  it("matches snapshot", () => {
    
    const aIconScale = shallow(<IconScale />).find("IconScale.svg").dive();
    console.log(aIconScale.debug())
    expect(aIconScale).toMatchSnapshot();
  });
});