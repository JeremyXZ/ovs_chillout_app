import React from "react";
import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Weather from "./Weather";

describe('Weather', () => {
    it('should render the title', () => {
        render(<Weather/>)
        const title = screen.getByText(/weather condition/i)
        expect(title).toBeInTheDocument()
    })

    it('should display loading text when the component is rendered', async () => {
        render(<Weather/>)
        
        const loadingText = await screen.findByText((content, element) => {
            return element.tagName.toLowerCase() === 'p' && content.includes('Loading...')
        })
       expect(loadingText).toBeInTheDocument()
    })

    it('should display weather text when the component is rendered', async () => {
        render(<Weather/>)
            const weatherText = await screen.findByText((content, element) => {
            return element.tagName.toLowerCase() === 'p' && content.includes("Current temperature in")
        })
       expect(weatherText).toBeInTheDocument()
    })
})