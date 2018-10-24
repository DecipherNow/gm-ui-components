import React from "react";
import { shallow } from "enzyme";

import IconObjectVideo from "./IconObjectVideo.svg";

describe("IconObjectVideo", () => {
  it("matches snapshot", () => {
    const aIconObjectVideo = shallow(<IconObjectVideo />).find("IconObjectVideo.svg");
    expect(aIconObjectVideo).toMatchSnapshot();
  });
});