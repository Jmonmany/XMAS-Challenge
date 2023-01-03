/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import { List } from './list';
import { useRobots } from '../../hooks/use.robots';
import { RobotClass } from '../../features/models/robot.model';

jest.mock('../../hooks/use.robots');
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
describe('Given "List" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: [mockRobot],
            handleLoad: jest.fn(),
            handleAdd: jest.fn(),
            handleDelete: jest.fn(),
            handleUpdate: jest.fn(),
        });
    });
    describe('When it is initially instantiated without data', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<List></List>);
            });
        });
        test(`Then component should be render the loading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Roboter Generator',
            });
            const elementName = screen.getByText('Name');
            const elementSpeed = screen.getByText('Speed');
            const elementEndurance = screen.getByText('Endurance');
            const elementUser = screen.getByText('User');
            const elementCreate = screen.getByText('CREATE');
            expect(elementName).toBeInTheDocument();
            expect(elementSpeed).toBeInTheDocument();
            expect(elementUser).toBeInTheDocument();
            expect(elementTitle).toBeInTheDocument();
            expect(elementCreate).toBeInTheDocument();
            expect(elementEndurance).toBeInTheDocument();
        });
    });
    describe('When it load the data', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<List></List>);
            });
        });
        test(`Then it should be render the data`, async () => {
            const elementList = await screen.findByRole('list');
            expect(elementList).toBeInTheDocument();
            await waitFor(() => {
                expect(useRobots().handleLoad).toHaveBeenCalled();
            });
        });
    });
});
