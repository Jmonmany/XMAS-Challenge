/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/no-conditional-expect */
import { render, screen, waitFor } from "@testing-library/react";
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
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();
    
    describe("When it has been render", () => {
        test("Then buttons should be in the screen", () => {
            render(
                <Robot
                    item={mockRobot}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robot>
            );
            const btnDelete = screen.getByRole("button", {
                name: "cancel",
            });
            const btnShow = screen.getByRole("button", {
                name: "edit",
            });
            const btnFavouriteTrue = screen.getByRole("button", {
                name: "heart_plus",
            });
            expect(btnDelete).toBeInTheDocument();
            expect(btnShow).toBeInTheDocument();
            expect(btnFavouriteTrue).toBeInTheDocument();
        });
        test("Then functions should be called", () => {
            render(
                <Robot
                    item={mockRobot}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Robot>
            );
            const btnDelete = screen.getByRole("button", {
                name: "cancel",
            });
            const btnShow = screen.getByRole("button", {
                name: "edit",
            });
            userEvent.click(btnDelete);
            userEvent.click(btnShow);
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
        })
        describe("Given Modal component", () => {
            test("Then buttons should be in the screen", () => {
                render(
                    <Robot
                        item={mockRobot}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                );
                const modalShowbtn = screen.getByRole("button", {
                    name: "edit",
                })
                userEvent.click(modalShowbtn);
                // Assert that the modal is visible
                const modalClosebtn = screen.getByRole("button", {
                    name: "Close",
                })
                expect(modalClosebtn).toBeVisible();
            })
            test("Then Close button should close the Model", () => {
                render(
                    <Robot
                        item={mockRobot}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                );
                
                const modalShowbtn = screen.getByRole("button", {
                    name: "edit",
                })
                userEvent.click(modalShowbtn);
                const inputElementsTxt = screen.getAllByRole("textbox");
                const modalClosebtn = screen.getByRole("button", {
                    name: "Close",
                })
                expect(inputElementsTxt[0]).toBeVisible()
                expect(inputElementsTxt[1]).toBeVisible()
                userEvent.click(modalClosebtn);
                expect(inputElementsTxt[0]).not.toBeVisible()
                expect(inputElementsTxt[1]).not.toBeVisible() 
                expect(modalClosebtn).not.toBeInTheDocument();
            })
            test("handleRobotUpdated updates the state of the component and calls handleClose", () => {
                render(
                    <Robot
                        item={mockRobot}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                );
                const matcherName = screen.getByText(mockRobotName)
                const matcherSpeed = screen.getByText(mockSpeed)
                const matcherEndurance = screen.getByText(mockEndurance)
                const matcherCreator = screen.getByText(mockCreator)
                const btnShow = screen.getByRole("button", {name: "edit"});
                userEvent.click(btnShow);
                const btnModalEdit = screen.getByRole("button", {name: "Edit"});
                expect(btnModalEdit).toBeVisible()
                expect(matcherName).toBeInTheDocument();
                expect(matcherSpeed).toBeInTheDocument();
                expect(matcherEndurance).toBeInTheDocument();
                expect(matcherCreator).toBeInTheDocument();
                const formData = {
                  name: "new test name",
                  speed: "5",
                  endurance: "10",
                  creator: "Test creator name"
                };
                const inputElementsTxt = screen.getAllByRole("textbox");
                const inputElementsNum = screen.getAllByRole("spinbutton");
                userEvent.type(inputElementsTxt[0], formData.name);
                userEvent.type(inputElementsTxt[1], formData.creator);
                userEvent.type(inputElementsNum[0], formData.speed);
                userEvent.type(inputElementsNum[1], formData.endurance);
                userEvent.click(btnModalEdit)
                waitFor(() => expect(btnModalEdit).not.toBeVisible());
                waitFor(() => expect(matcherName).toHaveValue(formData.name));
                waitFor(() => expect(matcherSpeed).toHaveValue(formData.speed));
                waitFor(() => expect(matcherEndurance).toHaveValue(formData.endurance));
                waitFor(() => expect(matcherCreator).toHaveValue(formData.creator));
              });
        });
    });
});


