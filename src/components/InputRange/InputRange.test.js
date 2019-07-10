import React from "react";

import InputRange from "./InputRange";

describe("InputRange", () => {
  it("matches snapshot", () => {
    const aInputRange = shallow(
      <InputRange label="Test" clickAction={() => {}} />
    );
    expect(aInputRange).toMatchSnapshot();
  });
});
