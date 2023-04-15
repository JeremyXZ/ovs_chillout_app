import React from "react";
import "@testing-library/jest-dom";
import { screen, render, act, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedProps } from "../../mockedData";
import Youtube from "./Youtube";


describe('Youtube', () => {
  window.alert = jest.fn();
    it('should render input and button element ', () => {
        const {getByPlaceholderText, getByRole} = render(<Youtube/>)
        const input = getByPlaceholderText('key in your music title')
        const button = getByRole('button', {name: 'Search'})
        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('should update title state when input value changes', () => {
        render(<Youtube/>);
        const input = screen.getByPlaceholderText('key in your music title');

        act(() => {
            userEvent.type(input, 'New Title');
          });
        
        expect(input).toHaveValue('New Title');
      });
      
      it('should calls setMusic when button is clicked', async () => {
        const setMusics = jest.fn();
        render(<Youtube setMusics={setMusics} />);
        const input = screen.getByPlaceholderText('key in your music title'); 
        const button = screen.getByRole('button', { name: 'Search' });

        act(() => {
            userEvent.type(input, 'great hit');
        });

        act(() => {
            userEvent.click(button);
            
        });
        
      await waitFor(() => {
        expect(setMusics).toHaveBeenCalled();
      });
      })

})