import React from "react";
import { shallow } from "enzyme";
import IconItemsGroup from "./IconItemsGroup.svg";
describe("IconItemsGroup", () => {
  it("matches snapshot", () => {
    
    const aIconItemsGroup = shallow(<IconItemsGroup />).find("IconItemsGroup.svg").dive();
    console.log(aIconItemsGroup.debug())
    expect(aIconItemsGroup).toMatchSnapshot();
  });
});