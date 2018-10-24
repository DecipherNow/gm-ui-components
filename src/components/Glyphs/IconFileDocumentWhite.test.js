import React from "react";
import { shallow } from "enzyme";

import IconFileDocumentWhite from "./IconFileDocumentWhite.svg";

describe("IconFileDocumentWhite", () => {
  it("matches snapshot", () => {
    const aIconFileDocumentWhite = shallow(<IconFileDocumentWhite />).find("IconFileDocumentWhite.svg");
    expect(aIconFileDocumentWhite).toMatchSnapshot();
  });
});