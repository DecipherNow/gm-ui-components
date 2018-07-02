import React from "react";
import renderer from "react-test-renderer";

import Box from "./Box";

describe("Box", () => {
  it("should render", () => {
    const aBox = renderer.create(<Box />).toJSON();
    expect(aBox).toMatchSnapshot();
  });
});
