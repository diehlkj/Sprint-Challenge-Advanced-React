import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import TopBar, { toggleInverse } from './TopBar';



describe('Testing if TopBar renders without crashing', () => {

    it("TopBar renders without crashing", () => {
      const div = document.createElement('div');
      ReactDOM.render(<TopBar />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});

// I'm not sure what else to test here... Not much is going on in the application...

describe('Testing if darkMode gives inverse of initial bool', () => {

    it("gives inverse bool", () => {
        const currentToggle = true;
        const expected = false;
    
        const actual = toggleInverse(currentToggle);
    
        expect(actual).toBe(expected);
    });
});