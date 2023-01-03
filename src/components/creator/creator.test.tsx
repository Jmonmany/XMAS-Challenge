import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Creator } from "./creator";

describe('Given "Add" component in "Robots" page', () => {
    const handleAdd = jest.fn();

    beforeEach(() => {
        render(<Creator handleAdd={handleAdd}></Creator>);
    });

    describe("When component is call with a DOM implementation", () => {
        test(`Then it should be render with its title`, () => {
            const addTitle = screen.getByRole("heading", {
                name: "Roboter Generator",
            });
            expect(addTitle).toBeInTheDocument();
        });
    });

    describe("When data is provided on form", () => {
        const mockRobotName = "Test name";
        const mockSpeed = "Test speed";
        const mockEndurance = "Test endurance";
        const mockCreator = "Test creator name";
        let inputElements: Array<HTMLElement>;
        let elementButton: HTMLElement;
        beforeEach(() => {
            inputElements = screen.getAllByRole("textbox");
            elementButton = screen.getByRole("button");
        });
        test("Then form could be used for type content", () => {
            expect(inputElements[0]).toBeInTheDocument();
            expect(inputElements[1]).toBeInTheDocument();
            expect(inputElements[2]).toBeInTheDocument();
            expect(inputElements[3]).toBeInTheDocument();
            userEvent.type(inputElements[0], mockRobotName);
            userEvent.type(inputElements[1], mockSpeed);
            userEvent.type(inputElements[2], mockEndurance);
            userEvent.type(inputElements[3], mockCreator);
            expect(inputElements[0]).toHaveValue(mockRobotName);
            expect(inputElements[1]).toHaveValue(mockSpeed);
            expect(inputElements[2]).toHaveValue(mockEndurance);
            expect(inputElements[3]).toHaveValue(mockCreator);
        });
        test("Then form could be used for send the function received in props", () => {
            userEvent.type(inputElements[0], mockRobotName);
            userEvent.type(inputElements[1], mockSpeed);
            userEvent.type(inputElements[2], mockEndurance);
            userEvent.type(inputElements[3], mockCreator);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
