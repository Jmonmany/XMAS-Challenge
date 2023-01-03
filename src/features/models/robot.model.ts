export type RobotModel = {
    id: string;
    name: string;
    imageUrl: string;
    speed: string;
    endurance: string;
    creationDate: Date;
    creationUser: string;
    isFavourite: boolean;
};

export class RobotClass implements RobotModel {
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
        public creationDate: Date,
        public creationUser: string,
        public isFavourite: false
    ) {
        this.id = RobotClass.generateId();
    }
}
