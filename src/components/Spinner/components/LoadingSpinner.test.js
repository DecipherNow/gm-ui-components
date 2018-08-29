import React from "react";
 import { shallow } from "enzyme";

 import LoadingSpinner from "./LoadingSpinner";

 describe("LoadingSpinner", () => {
   it("matches snapshot", () => {
     const aLoadingSpinner = shallow(<LoadingSpinner/>);
     expect(aLoadingSpinner).toMatchSnapshot();
   });
 });