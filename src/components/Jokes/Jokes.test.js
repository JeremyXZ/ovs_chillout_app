import React from "react";
import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import Jokes from './Jokes'

describe('Jokes', () => {
    it('should render the title', () => {
        render(<Jokes/>)
        const title = screen.getByText(/random joke/i)
        expect(title).toBeInTheDocument()
    })

    it('should fetch and display a joke', async () => {
        render(<Jokes />)
        const wrapper = screen.getByTestId('joke-wrapper');
        expect(wrapper).toBeInTheDocument()

        wrapper.click();

        await waitFor(() => {
            const jokePart1 = screen.getByTestId('part1');
            expect(jokePart1).toBeInTheDocument();

            const jokePart2 = screen.queryByTestId('part2');
            expect(jokePart2).toBeInTheDocument();
        });
    })
})