import React from "react";
import { shallow } from "enzyme";
import LongLogo from "./LongLogo";

describe("LongLogo", () => {
  it("should render", () => {
    const aLongLogo = shallow(<LongLogo />);
    expect(aLongLogo).toMatchSnapshot();
  });
});
