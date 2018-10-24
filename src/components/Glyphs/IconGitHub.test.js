import React from "react";
import { shallow } from "enzyme";

import IconGitHub from "./IconGitHub.svg";

describe("IconGitHub", () => {
  it("matches snapshot", () => {
    const aIconGitHub = shallow(<IconGitHub />);
    expect(aIconGitHub).toMatchSnapshot();
  });
});