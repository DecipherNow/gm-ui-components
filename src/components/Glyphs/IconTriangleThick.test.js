import React from "react";
import { shallow } from "enzyme";
import IconTriangleThick from "./IconTriangleThick.svg";
describe("IconTriangleThick", () => {
  it("matches snapshot", () => {
    
    const aIconTriangleThick = shallow(<IconTriangleThick />).find("IconTriangleThick.svg").dive();
    console.log(aIconTriangleThick.debug())
    expect(aIconTriangleThick).toMatchSnapshot();
  });
});