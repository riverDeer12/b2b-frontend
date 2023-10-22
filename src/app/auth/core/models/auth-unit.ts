import {EntityType} from '../enums/entity-type';

export class AuthUnit {
    username!: string;
    password!: string;
    rememberMe!: boolean;
    entityType!: EntityType;
}
