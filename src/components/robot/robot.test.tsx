/* eslint-disable jest/no-conditional-expect */
import { render, screen } from "@testing-library/react";
import { RobotClass } from "../../features/models/robot.model";
import userEvent from "@testing-library/user-event";
import { Robot } from "./robot";

describe("Given Robot component", () => {

    const mockRobotName = "Test name";
    const mockImage = "Test image";
    const mockSpeed = "Test speed";
    const mockEndurance = "Test endurance";
    const mockCreator = "Test creator name";
    const mockRobot = new RobotClass(
        mockRobotName,
        mockImage,
        mockSpeed,
        mockEndurance,
        mockCreator,
    );
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();
    describe("When it has been render", () => {
        test("Then buttons should be in the screen", () => {
            render(
                <Robot
                    item={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robot>
            );
            const btnDelete = screen.getByRole("button", {
                name: "cancel",
            });
            const btnUpdate = screen.getByRole("button", {
                name: "edit",
            });
            const btnFavouriteTrue = screen.getByRole("button", {
                name: "heart_plus",
            });
            expect(btnDelete).toBeInTheDocument();
            expect(btnUpdate).toBeInTheDocument();
            expect(btnFavouriteTrue).toBeInTheDocument();
        });
        test("Then functions should be called", () => {
            render(
                <Robot
                    item={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robot>
            );
            const btnDelete = screen.getByRole("button", {
                name: "cancel",
            });
            const btnUpdate = screen.getByRole("button", {
                name: "edit",
            });
            userEvent.click(btnDelete);
            userEvent.click(btnUpdate);
            expect(handleUpdate).toHaveBeenCalledTimes(1);
            expect(handleDelete).toHaveBeenCalledTimes(1);

            if (mockRobot.isFavourite) {
                const btnRemoveFavourite = screen.getByRole("button", {
                    name: "heart_minus",
                });
                expect(btnRemoveFavourite).toBeInTheDocument();
                userEvent.click(btnRemoveFavourite);
                expect(handleFavourite).toHaveBeenCalledTimes(1);
            } else {
                const btnAddFavourite = screen.getByRole("button", {
                    name: "heart_plus",
                });
                expect(btnAddFavourite).toBeInTheDocument();
                userEvent.click(btnAddFavourite);
                expect(handleFavourite).toHaveBeenCalledTimes(1);
            }
        });
    });
});
