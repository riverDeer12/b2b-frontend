import {EntityType} from '../../auth/core/enums/entity-type';

export class Entity {
    title!: string;
    externalLink!: string;
    imageLink!: string;

    getTitle(entity: any, type: EntityType): string {
        switch (type){
            case EntityType.Organization:
                return entity.name;
            case EntityType.Company:
                return entity.name;
            case EntityType.Scientist:
                return entity.firstname + ' ' + entity.lastname;
            default:
                return '';
        }
    }

    getExternalLink(entity: any, type: EntityType): string{
        switch (type){
            case EntityType.Organization:
                return entity.website;
            case EntityType.Company:
                return entity.website;
            case EntityType.Scientist:
                return entity.googleScholarLink;
            default:
                return '';
        }
    }

    getImageLink(entity: any, type: EntityType): string{
        switch (type){
            case EntityType.Organization:
                return entity.logo;
            case EntityType.Company:
                return entity.logo;
            case EntityType.Scientist:
                return entity.profilePicture;
            default:
                return '';
        }
    }

    getAddress(entity: any, type: EntityType): string{
        switch (type){
            case EntityType.Organization:
                return entity.address;
            case EntityType.Company:
                return entity.address;
            case EntityType.Scientist:
                return entity.employmentCollege;
            default:
                return '';
        }
    }
}
