/* eslint-disable testing-library/await-async-utils */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Edit } from './edit'
import { ROBOT } from '../../features/data/mock.robot';

describe('Given Robot component', () => {
    const onRobotUpdated = jest.fn()
    const robot = ROBOT
    beforeEach(() => {
        render(<Edit onRobotUpdated={onRobotUpdated} robot={robot}></Edit>);
    });
    test(`Then it should be render with its title`, () => {
        const addTitle = screen.getByRole("button", {
            name: "Edit",
        });
        expect(addTitle).toBeInTheDocument();
    });
    
    describe("When data is provided on form", () => {
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
            expect(inputElementsTxt[0]).toHaveValue(robot.name);
            expect(inputElementsTxt[1]).toHaveValue(robot.creationUser);
            waitFor(() => expect(inputElementsNum[0]).toHaveValue("10"));
            waitFor(() => expect(inputElementsNum[1]).toHaveValue("0"));
        });
        // test("Then form could be used for send the function received in props", () => {
        //     userEvent.click(elementButton);
        //     expect(onRobotUpdated).toHaveBeenCalled();
        // });
    });
})
