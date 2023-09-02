
import AppBar from "@components/Appbar";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';


beforeEach(() => {
    render(<AppBar />)
})

test("should render appbar", () => {
    const appbar = screen.getByTestId('appbar')
    expect(appbar).toBeInTheDocument()
})

test('should contain a logo', () => {
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
})

describe("dropdown menu toggler", () => {
    test('should contain a dropdown menu toggle', () => {
        const menuToggle = screen.getByRole('button')
        expect(menuToggle).toBeInTheDocument()
    })

})

