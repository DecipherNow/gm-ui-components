import React from "react";
import { shallow } from "enzyme";
import IconService from "./IconService.svg";
describe("IconService", () => {
  it("matches snapshot", () => {
    
    const aIconService = shallow(<IconService />).find("IconService.svg").dive();
    console.log(aIconService.debug())
    expect(aIconService).toMatchSnapshot();
  });
});