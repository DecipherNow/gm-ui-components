import React from "react";

import { LayoutSection, IconBell, Readout, ReadoutGroup } from "..";

const LayoutSectionWithReadouts = (
  <LayoutSection title={"Test Layout"} icon={() => <IconBell size={"24px"} />}>
    <ReadoutGroup>
      <Readout
        readoutItems={[
          {
            title: "Uptime",
            value: "1000ms"
          }
        ]}
      />
      <Readout
        primary
        readoutItems={[
          {
            title: "Error Rate",
            value: "0.000%",
            icon: () => <IconBell size={"24px"} />
          }
        ]}
      />
      <Readout
        readoutItems={[
          {
            title: "Host CPU Cores",
            value: "0"
          }
        ]}
      />
    </ReadoutGroup>
  </LayoutSection>
);

describe("LayoutSection", () => {
  let tree;
  beforeEach(() => {
    tree = shallow(LayoutSectionWithReadouts);
  });
  test("matches snapshot", () => {
    tree = shallow(LayoutSectionWithReadouts);
    expect(tree).toMatchSnapshot();
  });
  test("renders children", () => {
    expect(tree.find(ReadoutGroup)).toHaveLength(1);
  });
  test("renders an Icon", () => {
    expect(tree.find(IconBell)).toHaveLength(1);
  });
  test("renders a Title", () => {
    expect(tree.find("SectionTitle").children().text()).toBe("Test Layout");
  });
});
