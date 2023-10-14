import {EntityType} from '../../auth/core/enums/entity-type';
import {Scientist} from '../../scientists/core/models/scientist';
import {Organization} from '../../organizations/core/models/organization';
import {Company} from 'src/app/companies/core/models/company';
import {News} from 'src/app/news/core/models/news';

export class Entity {
    title!: string;
    externalLink!: string;
    imageLink!: string;

    public static isSimpleEntity(type: EntityType): boolean{
        switch (type) {
            case EntityType.News:
                return true;
            default:
                return false;
        }
    }

    /**
     * Helper for mapping
     * resolver response to entity.
     *
     * @param type type of entity.
     * @param response response from resolver.
     */
    public static assignResponseToEntity(type: EntityType, response: any) {
        switch (type) {
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
            case EntityType.News:
                let news = new News();
                news = Object.assign(new News(), response['entity']);
                return news;
            default:
                return {};
        }
    }

    /**
     * Entity description getter.
     *
     * @param entity entity data.
     * @param type entity type.
     */
    public static getDescription(entity: any, type: EntityType): string {
        switch (type){
            case EntityType.News:
                return entity.content.translations.HR;
            default:
                return entity.description.translations.HR;
        }
    }

    /**
     * Entity title getter.
     *
     * @param entity entity data.
     * @param type entity type.
     */
    public static getTitle(entity: any, type: EntityType): string {
        switch (type) {
            case EntityType.Organization:
                return entity.name;
            case EntityType.Company:
                return entity.name;
            case EntityType.Scientist:
                return entity.firstname + ' ' + entity.lastname;
            case EntityType.News:
                return entity.title.translations.HR;
            default:
                return '';
        }
    }

    /**
     * Entity external connection link getter.
     *
     * @param entity entity data.
     * @param type entity type.
     */
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

    /**
     * Entity image getter.
     *
     * @param entity entity data.
     * @param type entity type.
     */
    public static getImageLink(entity: any, type: EntityType): string {
        switch (type) {
            case EntityType.Organization:
                return entity.logo;
            case EntityType.Company:
                return entity.logo;
            case EntityType.Scientist:
                return entity.profilePicture;
            case EntityType.News:
                return entity.featuredImage;
            default:
                return '';
        }
    }

    /**
     * Entity address getter.
     *
     * @param entity entity data.
     * @param type entity type.
     */
    public static getAddress(entity: any, type: EntityType): string {
        switch (type) {
            case EntityType.Organization:
                return entity.address;
            case EntityType.Company:
                return entity.address;
            case EntityType.Scientist:
                return entity.employmentCollege.translations.HR;
            default:
                return '';
        }
    }
}
