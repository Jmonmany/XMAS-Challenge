import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Edit } from './edit'

// describe('Given Robot component', () => {
//     const handleUpdate = jest.fn()
//     beforeEach(() => {
//         render(<Edit handleUpdate={handleUpdate}></Edit>);
//     });
    
//     describe("When component is call with a DOM implementation", () => {
//         test(`Then it should be render with its title`, () => {
//             const addTitle = screen.getByRole("heading", {
//                 name: "Roboter Generator",
//             });
//             expect(addTitle).toBeInTheDocument();
//         });
//     });
//     const robot = {
//         id: 1,
//         name: 'Robot1',
//         speed: 5,
//         endurance: 7,
//         creationUser: 'User1'
//     }

//   it('should render the form and input fields with the correct values', () => {
//     const { getByLabelText } = render(<Edit robot={robot} handleUpdate={handleUpdate} />)
//     const nameInput = getByLabelText('Name')
//     const speedInput = getByLabelText('Speed')
//     const enduranceInput = getByLabelText('Endurance')
//     const userInput = getByLabelText('User')

//     expect(nameInput.value).toBe(robot.name)
//     expect(speedInput.value).toBe(robot.speed)
//     expect(enduranceInput.value).toBe(robot.endurance)
//     expect(userInput.value).toBe(robot.creationUser)
//   })

//   it('should update the form data when the input fields are changed', () => {
//     const { getByLabelText } = render(<Edit robot={robot} handleUpdate={handleUpdate} />)
//     const nameInput = getByLabelText('Name')
//     const speedInput = getByLabelText('Speed')
//     const enduranceInput = getByLabelText('Endurance')
//     const userInput = getByLabelText('User')

//     fireEvent.change(nameInput, { target: { value: 'UpdatedRobot' } })
//     fireEvent.change(speedInput, { target: { value: '7' } })
//     fireEvent.change(enduranceInput, { target: { value: '9' } })
//     fireEvent.change(userInput, { target: { value: 'UpdatedUser' } })

//     expect(nameInput.value).toBe('UpdatedRobot')
//     expect(speedInput.value).toBe('7')
//     expect(enduranceInput.value).toBe('9')
//     expect(userInput.value).toBe('UpdatedUser')
//   })

//   it('should call the handleUpdate function when the form is submitted', () => {
//     const { getByText } = render(<Edit robot={robot} handleUpdate={handleUpdate} />)
//     const submitButton = getByText('Edit')

//     fireEvent.click(submitButton)

//     expect(handleUpdate).toHaveBeenCalled()
//   })
// })
