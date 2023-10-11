import {EntityType} from '../../auth/core/enums/entity-type';
import {Scientist} from '../../scientists/core/models/scientist';
import {Organization} from '../../organizations/core/models/organization';
import { Company } from 'src/app/companies/core/models/company';

export class Entity {
    title!: string;
    externalLink!: string;
    imageLink!: string;

    /**
     * Helper for mapping
     * resolver response to entity.
     *
     * @param entityType type of entity.
     * @param response response from resolver.
     */
    public static assignResponseToEntity(entityType: EntityType, response: any) {
        switch (entityType) {
            case EntityType.Scientist:
                let scientist = new Scientist();
                scientist = Object.assign(new Scientist(), response['entity']);
                return scientist;
            case EntityType.Company:
                let company = new Company();
                company = Object.assign(new Company(), response['entity']);
                return company;
            case EntityType.Organization:
                let organization = new Organization();
                organization = Object.assign(new Organization(), response['entity']);
                return organization;
            default:
                return {};
        }
    }


    public static getTitle(entity: any, type: EntityType): string {
        switch (type) {
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

    public static getExternalLink(entity: any, type: EntityType): string {
        switch (type) {
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

    public static getImageLink(entity: any, type: EntityType): string {
        switch (type) {
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

    public static getAddress(entity: any, type: EntityType): string {
        switch (type) {
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
