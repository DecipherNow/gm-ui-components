import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Make testing functions available in all test files without importing
global.shallow = shallow;
global.mount = mount;

Enzyme.configure({ adapter: new Adapter() });
