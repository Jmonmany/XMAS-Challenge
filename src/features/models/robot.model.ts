export type RobotModel = {
    id: string;
    name: string;
    imageUrl: string;
    speed: string;
    endurance: string;
    creationDate: string;
    creationUser: string;
    isFavourite: boolean;
};

export class RobotClass implements RobotModel {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    static generateDate() {
        const currentDate = new Date();
        return currentDate.toLocaleString();
    }
    id: string;
    isFavourite: boolean;
    creationDate: string;

    constructor(
        public name: string,
        public imageUrl: string,
        public speed: string,
        public endurance: string,
        public creationUser: string,
    ) {
        this.id = RobotClass.generateId();
        this.isFavourite = false;
        this.creationDate = RobotClass.generateDate();
    }
}
