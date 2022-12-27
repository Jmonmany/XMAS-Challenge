import { ROBOT } from '../data/mock.robot';
import { Robot } from './robot.model';

describe('Given "Robot" data model', () => {
    test('Then it should instantiate a ROBOT', () => {
        const mockRobot = ROBOT
        expect(mockRobot).toBeInstanceOf(Robot);
        expect(mockRobot).toHaveProperty('name', ROBOT.name);
        expect(mockRobot).toHaveProperty('imageUrl', ROBOT.imageUrl);
        expect(mockRobot).toHaveProperty('speed', ROBOT.speed);
        expect(mockRobot).toHaveProperty('endurance', ROBOT.endurance);
        expect(mockRobot).toHaveProperty('creationDate', ROBOT.creationDate);
        expect(mockRobot).toHaveProperty('creationUser', ROBOT.creationUser);
    });
});
