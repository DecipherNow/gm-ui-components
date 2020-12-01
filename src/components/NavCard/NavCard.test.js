import React from "react";

import { IconAlertTriangle } from "components";
import NavCard from "./NavCard";

const details = [{ name: "Uptime", value: "15 Days" }];

describe("Components|NavCard", () => {
  let aNavCard;
  beforeEach(() => {
    aNavCard = shallow(
      <NavCard
        icon={() => <IconAlertTriangle />}
        title={"NavCard"}
        details={details}
        children={() => <span>Hello World!</span>}
      />
    );
  });
  it("matches snapshot", () => {
    expect(aNavCard).toMatchSnapshot();
  });
  it("renders an Icon", () => {
    expect(aNavCard.find(IconAlertTriangle)).toHaveLength(1);
    expect(aNavCard.find("NavCardIcon")).toHaveLength(1);
  });
  it("renders a title", () => {
    expect(aNavCard.find("NavCardTitle h1").text()).toBe("NavCard");
  });
  it("renders details", () => {
    expect(aNavCard.find("NavCardDetails")).toHaveLength(1);
    expect(aNavCard.find("NavCardKey").children().text()).toBe("Uptime");
    expect(aNavCard.find("NavCardKey")).toHaveLength(1);
    expect(aNavCard.find("NavCardVal")).toHaveLength(1);
    expect(aNavCard.find("NavCardVal").children().text()).toBe("15 Days");
  });
  it("renders children", () => {
    expect(aNavCard.find("span").text()).toBe("Hello World!");
  });
});
