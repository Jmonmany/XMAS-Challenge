import { Repository } from "../types/repo";
import { RobotModel } from "../features/models/robot.model";

const invalidIdError = new Error('Invalid ID');

export class RobotsRepo implements Repository<RobotModel> {
    constructor(private url = 'https://apiserver-yfwk.onrender.com/robots/') {
    }

    async load(): Promise<RobotModel[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async queryId(id: string): Promise<RobotModel> {
        if (!id || typeof id !== 'string')
            return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(payload: Partial<RobotModel>): Promise<RobotModel> {
        const resp = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async update(payload: Partial<RobotModel>): Promise<RobotModel> {
        if (!payload.id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + payload.id, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async delete(id: RobotModel['id']): Promise<RobotModel['id']> {
        if (!id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id, {
            method: 'DELETE',
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return id;
    }
}
