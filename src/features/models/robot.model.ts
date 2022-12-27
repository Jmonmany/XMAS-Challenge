export type RobotModel = {
    id: string;
    name: string;
    imageUrl: string;
    speed: string;
    endurance: string;
    creationDate: string;
    creationUser: string;
};

export class Robot implements RobotModel {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;

    constructor(
        public name: string,
        public imageUrl: string,
        public speed: string,
        public endurance: string,
        public creationDate: string,
        public creationUser: string
    ) {
        this.id = Robot.generateId();
    }
}
