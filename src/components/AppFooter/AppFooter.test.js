import React from "react";

import AppFooter from "./AppFooter.js";

describe("AppFooter", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppFooter />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("hides social links when useExternalLinks is false", () => {
    wrapper = shallow(<AppFooter useExternalLinks={false} />);
    expect(
      wrapper.find("FooterRightContent").dive().find("LongLogo")
    ).toHaveLength(0);
  });

  it("disables logo link when useExternalLinks is false", () => {
    wrapper = shallow(<AppFooter useExternalLinks={false} />);
    const logoProps = wrapper
      .find("FooterLeftContent")
      .dive()
      .find("LongLogo")
      .props();
    expect(logoProps.href).toBeFalsy();
    expect(logoProps.rel).toBeFalsy();
    expect(logoProps.target).toBeFalsy();
  });

  it("overrides default footer content with children if provided", () => {
    wrapper = shallow(
      <AppFooter>
        <span id="custom" />
      </AppFooter>
    );
    expect(wrapper.find("span#custom")).toHaveLength(1);
    expect(wrapper.find("FooterLeftContent")).toHaveLength(0);
    expect(wrapper.find("FooterCenterContent")).toHaveLength(0);
    expect(wrapper.find("FooterRightContent")).toHaveLength(0);
  });

  it("overrides individual footer sections if footer* props are provided", () => {
    wrapper = shallow(<AppFooter footerLeft={<span id="custom" />} />);
    const footerLeftContent = wrapper.find("FooterLeftContent");
    expect(footerLeftContent.dive().find("#custom")).toHaveLength(1);
    expect(footerLeftContent.find("LongLogo")).toHaveLength(0);

    wrapper = shallow(<AppFooter footerCenter={<span id="custom" />} />);
    const footerCenterContent = wrapper.find("FooterCenterContent");
    expect(footerCenterContent.dive().find("#custom")).toHaveLength(1);
    expect(footerCenterContent.find("Copyright")).toHaveLength(0);

    wrapper = shallow(<AppFooter footerRight={<span id="custom" />} />);
    const footerRightContent = wrapper.find("FooterRightContent");
    expect(footerRightContent.dive().find("#custom")).toHaveLength(1);
    expect(footerRightContent.find("Links")).toHaveLength(0);
  });
});
