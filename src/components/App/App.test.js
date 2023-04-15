import React from "react";
import "@testing-library/jest-dom";
import { screen, render, waitFor, getByText } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import App from "./App";


describe('App', () => {

    it('should render 7 child components with correct props', () => {
        const {getByText} = render(<App/>)
        
        expect(getByText(/Time to Chill Out/i)).toBeInTheDocument();

        expect(getByText(/Quotes/i)).toBeInTheDocument();
        expect(getByText(/Weather/i)).toBeInTheDocument();
        expect(getByText(/format/i)).toBeInTheDocument();
        expect(getByText(/Random Joke/i)).toBeInTheDocument();
        expect(getByText(/Expand/i)).toBeInTheDocument();
        expect(getByText(/Search/i)).toBeInTheDocument();
            })
})