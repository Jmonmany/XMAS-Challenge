/* eslint-disable testing-library/await-async-utils */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Creator } from "./creator";

describe('Given "Creator" component', () => {
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
        const mockSpeed = "5";
        const mockEndurance = "10";
        const mockCreator = "Test creator name";
        let inputElementsTxt: Array<HTMLElement>;
        let inputElementsNum: Array<HTMLElement>;
        let elementButton: HTMLElement;
        beforeEach(() => {
            inputElementsTxt = screen.getAllByRole("textbox");
            inputElementsNum = screen.getAllByRole("spinbutton")
            elementButton = screen.getByRole("button");
        });
        test("Then form could be used for type content", () => {
            expect(inputElementsTxt[0]).toBeInTheDocument();
            expect(inputElementsTxt[1]).toBeInTheDocument();
            expect(inputElementsNum[0]).toBeInTheDocument();
            expect(inputElementsNum[1]).toBeInTheDocument();
            userEvent.type(inputElementsTxt[0], mockRobotName);
            userEvent.type(inputElementsTxt[1], mockCreator);
            userEvent.type(inputElementsNum[0], mockSpeed);
            userEvent.type(inputElementsNum[1], mockEndurance);
            expect(inputElementsTxt[0]).toHaveValue(mockRobotName);
            expect(inputElementsTxt[1]).toHaveValue(mockCreator);
            waitFor(() => expect(inputElementsNum[0]).toHaveValue("5"));
            waitFor(() => expect(inputElementsNum[1]).toHaveValue("10"));
        });
        test("Then form could be used for send the function received in props", () => {
            userEvent.type(inputElementsTxt[0], mockRobotName);
            userEvent.type(inputElementsTxt[1], mockCreator);
            userEvent.type(inputElementsNum[0], mockSpeed);
            userEvent.type(inputElementsNum[1], mockEndurance);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
