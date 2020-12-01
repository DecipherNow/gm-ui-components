import React from "react";

import { keen } from "style/theme";

import Status from "./Status";

import * as components from "./components";

describe("Status", () => {
  let aStatus;

  beforeEach(() => {
    aStatus = shallow(<Status />);
  });

  it("matches snapshot", () => {
    const aStatus = shallow(<Status />);
    expect(aStatus).toMatchSnapshot();
  });

  describe("Layout", () => {
    const aDefaultStatus = mount(<Status theme={keen} />);
    expect(aDefaultStatus.find("Wrap")).toMatchSnapshot();
    expect(aDefaultStatus.find("Graphic").html()).toContain(
      "color",
      keen.COLOR_INTENT_HIGHLIGHT
    );

    const aBlockComponent = mount(<Status isBlock />);
    expect(aBlockComponent.find("Wrap")).toMatchSnapshot();

    const anErrorStatus = mount(<Status statusType="error" />);
    expect(anErrorStatus.find("Wrap")).toMatchSnapshot();
  });

  describe("Props", () => {
    test("should display a message if one is provided", () => {
      expect(aStatus.find("Message")).toHaveLength(0);
      aStatus = shallow(<Status message="Test message!" />);
      expect(aStatus.find("Message")).toHaveLength(1);
      expect(aStatus.find("Message").text()).toEqual("Test message!");
    });

    test("should display a detail if one is provided", () => {
      expect(aStatus.find("Detail")).toHaveLength(0);
      aStatus = shallow(<Status detail="Test detail!" />);
      expect(aStatus.find("Detail")).toHaveLength(1);
      expect(aStatus.find("Detail").text()).toEqual("Test detail!");
    });

    test("should display a custom graphic if one is provided", () => {
      aStatus = shallow(<Status graphic={<svg id="test-graphic" />} />);
      expect(aStatus.find("#test-graphic")).toHaveLength(1);
    });

    test("should use the correct colors and graphic based on the status prop", () => {
      const testTable = [
        {
          statusType: "info",
          color: keen.COLOR_INTENT_INFO,
          visual: "GraphicStatusInfo"
        },
        {
          statusType: "progress",
          color: keen.COLOR_INTENT_SUCCESS,
          visual: "icon-mock"
        },
        {
          statusType: "warning",
          color: keen.COLOR_INTENT_WARNING,
          visual: "GraphicStatusWarning"
        },
        {
          statusType: "error",
          color: keen.COLOR_INTENT_DANGER,
          visual: "GraphicStatusError"
        },
        {
          statusType: "success",
          color: keen.COLOR_INTENT_SUCCESS,
          visual: "GraphicStatusSuccess"
        },
        {
          statusType: "indeterminate",
          color: keen.COLOR_INTENT_SUCCESS,
          visual: "GraphicStatusIndeterminate"
        }
      ];
      testTable.forEach(t => {
        aStatus = mount(<Status statusType={t.statusType} />);
        expect(aStatus.find(t.visual)).toHaveLength(1);
        expect(
          aStatus.find("Graphic").props().graphicColor({ theme: keen })
        ).toBe(t.color);
      });
    });
  });

  describe("components", () => {
    Object.keys(components).forEach(c => {
      const C = components[c];
      expect(C).toMatchSnapshot();
    });
  });
});
