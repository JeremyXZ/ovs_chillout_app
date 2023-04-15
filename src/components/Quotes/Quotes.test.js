import React from "react";
import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quotes from "./Quotes";

describe('Quotes', () => {

    it('should render title ', () => {
        render(<Quotes/>)
        const title = screen.getByText('Inspirational Quotes:')
        expect(title).toBeInTheDocument()
    })

    it('should fetch and display a quote', async () => {
        render(<Quotes/>)
        const quoteText = await screen.getByTestId('quote-text')
        expect(quoteText).toBeInTheDocument()
      

        
        await waitFor(() => {
            expect(quoteText.textContent).not.toBe(''); 
          })
      
        
    })

    it('should display a quote when the wrapper is clicked', async () => {
        render(<Quotes/>)
        const wrapper = await screen.getByTestId('quote-wrapper')
        const quoteText = await screen.getByTestId('quote-text')

        wrapper.click()
        expect(quoteText).toBeInTheDocument()

        await waitFor(() => {
            expect(quoteText.textContent).not.toBe(''); 
          });

    })
} )
