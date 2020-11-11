import React from "react";

import ToggleSwitch from "./ToggleSwitch";
import { theme } from "style/theme";

describe("ToggleSwitch", () => {
  it("matches snapshot", () => {
    const aToggleSwitch = shallow(<ToggleSwitch />);
    expect(aToggleSwitch).toMatchSnapshot();
  });

  describe("props", () => {
    test("should use a label if one was provided", () => {
      const aToggleSwitch = shallow(<ToggleSwitch label={"Test label!"} />);
      expect(aToggleSwitch.find("InputLabelText")).toHaveLength(1);
      expect(aToggleSwitch.find("InputLabelText").text()).toBe("Test label!");
    });

    test("should use color if one was provided", () => {
      const aToggleSwitch = mount(
        <ToggleSwitch color={"#123445"} theme={keen} />
      );
      expect(
        aToggleSwitch.find("ToggleSwitchElement")
      ).toHaveStyleRule("border-color", "#123445", { modifier: "&" });
    });
  });
});
