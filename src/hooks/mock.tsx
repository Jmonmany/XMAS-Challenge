import { ROBOT, ROBOT2 } from '../features/data/mock.robot';
import { RobotClass } from '../features/models/robot.model';
import { RobotsRepo } from '../services/repository';
export const mockRobot1 = ROBOT
mockRobot1.id = '000001';
export const mockRobot2 = ROBOT2
mockRobot2.id = '000002';
export const mockRobots = [mockRobot1, mockRobot2];
export const mockAddRobot = new RobotClass('Added Robot', 'https', '10', '10', 'GOD');
mockAddRobot.id = '000003';
export const mockUpdateRobot = { ...mockRobot2, title: 'Update Robot' };

export const mockValidRepoResponse = () => {
    (RobotsRepo.prototype.load as jest.Mock).mockResolvedValue(mockRobots);
    (RobotsRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddRobot);
    (RobotsRepo.prototype.update as jest.Mock).mockResolvedValue(mockUpdateRobot);
    (RobotsRepo.prototype.delete as jest.Mock).mockResolvedValue(mockRobot1.id);
};

