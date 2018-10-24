import React from "react";
import { shallow } from "enzyme";
import IconBullet from "./IconBullet.svg";
describe("IconBullet", () => {
  it("matches snapshot", () => {
    
    const aIconBullet = shallow(<IconBullet />).find("IconBullet.svg").dive();
    console.log(aIconBullet.debug())
    expect(aIconBullet).toMatchSnapshot();
  });
});