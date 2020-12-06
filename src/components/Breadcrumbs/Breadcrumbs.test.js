import React from "react";

import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";

const crumbs = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Testing a really long breadcrumb item"
];

describe("Breadcrumbs", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Breadcrumbs crumbs={crumbs} />);
  });
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("renders Breadcrumb component", () => {
    expect(wrapper.find("Breadcrumb")).toHaveLength(4);
  });
  test("passes delimiter prop to Breadcrumb", () => {
    wrapper = shallow(<Breadcrumbs crumbs={crumbs} delimiter={false} />);
    expect(wrapper.find("Breadcrumb").at(0).props().delimiter).toBeFalsy();
  });
});

describe("Breadcrumb", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Breadcrumb />);
  });
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
