import { Repository } from 'typeorm';
import { PlayerEntity } from '../player.entity';
export declare class PlayerRepositoryService {
    private readonly repo;
    constructor(repo: Repository<PlayerEntity>);
    findAll(): Promise<PlayerEntity[]>;
    findById(id: string): Promise<PlayerEntity | null>;
    save(player: PlayerEntity): Promise<PlayerEntity>;
}
