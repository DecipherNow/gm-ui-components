import React from "react";
import { shallow } from "enzyme";
import IconEntity from "./IconEntity.svg";
describe("IconEntity", () => {
  it("matches snapshot", () => {
    
    const aIconEntity = shallow(<IconEntity />).find("IconEntity.svg").dive();
    console.log(aIconEntity.debug())
    expect(aIconEntity).toMatchSnapshot();
  });
});