import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FunImages from "./FunImages";



describe('FunImages', () => {
    
    it('should render the button texts', ()=> {
        render(<FunImages/>)
        const nextButton = screen.getByRole('button', {name: /next/i})
        expect (nextButton).toBeInTheDocument()
        const expandButton = screen.getByRole('button', {name: /expand/i})
        expect(expandButton).toBeInTheDocument()
    })

    it('updates the slug state when button is clicked', () => {
        render(<FunImages/>)
        const nextButton = screen.getByRole('button', {name: /next/i})
        const image = screen.getByRole('img')
        userEvent.click(nextButton)
        expect(image).toHaveAttribute("data-slug-hash", "VYmXLM")

    })

    test('getFullScreen is called when button is clicked', () => {
        const mockedRequest = jest.fn();
        document.documentElement.requestFullscreen = mockedRequest;
    
        render(<FunImages/>);
    
        const expandButton = screen.getByRole('button', { name: /expand/i });
        userEvent.click(expandButton);
    
        expect(mockedRequest).toHaveBeenCalled();
        
      });    

})
