import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";


import Header from "./Header";
import { mockedProps } from "../../mockedData";

describe("Header", () => {
    
    it("should successfully render the component and match the snapshot", () => {
        const { asFragment } = render(<Header title={mockedProps.tiele}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("should render the title ", () => {
        render(<Header title={mockedProps.title}/>)
        const title =  screen.getByText(mockedProps.title)
        expect(title).toBeInTheDocument()
    })

    it("should render the UK time iframe", () => {
        render(<Header/>)
        const iframe = screen.getByTitle('local-time')
        expect(iframe).toBeInTheDocument()
        expect(iframe).toHaveAttribute('src', 'https://free.timeanddate.com/clock/i8s6z6ks/n1337/szw110/szh110/hoc000/hbw0/hfc09f/cf100/hnc07c/hwc000/fas20/facfff/fnu2/fdi76/mqcfff/mqs4/mql18/mqw4/mqd60/mhcfff/mhs4/mhl5/mhw4/mhd62/mmv0/hhcfff/hhs1/hhb10/hmcfff/hms1/hmb10/hscfff/hsw3')
        expect(screen.getByText('UK')).toBeInTheDocument()
    })

    it("should render the China time iframe", () => {
        render(<Header/>)
        const iframe = screen.getByTitle('home-time')
        expect(iframe).toBeInTheDocument()
        expect(iframe).toHaveAttribute('src', 'https://free.timeanddate.com/clock/i8s6zcnh/n33/szw110/szh110/hoc000/hbw0/hfc09f/cf100/hnc07c/hwc000/fas20/facfff/fnu2/fdi76/mqcfff/mqs4/mql18/mqw4/mqd60/mhcfff/mhs4/mhl5/mhw4/mhd62/mmv0/hhcfff/hhs1/hhb10/hmcfff/hms1/hmb10/hscfff/hsw3')
        expect(screen.getByText('China')).toBeInTheDocument()
    })
})