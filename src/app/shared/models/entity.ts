import {EntityType} from '../../auth/core/enums/entity-type';
import {Scientist} from '../../scientists/core/models/scientist';
import {Organization} from '../../organizations/core/models/organization';
import {Company} from 'src/app/companies/core/models/company';
import {News} from 'src/app/news/core/models/news';
import {TranslationsObject} from './localized-property';

export class Entity {
    title!: string;
    externalLink!: string;
    imageLink!: string;

    public static isSimpleEntity(type: EntityType): boolean {
        switch (type) {
            case EntityType.News:
            case EntityType.ResearchProblem:
            case EntityType.Equipment:
            case EntityType.SpecificKnowledge:
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
        switch (type) {
            case EntityType.News:
                return entity.content.translations[localStorage.getItem('language') as keyof TranslationsObject];
            default:
                return entity.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
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
                return entity.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
            case EntityType.ResearchProblem:
                return entity.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
            case EntityType.Equipment:
                return entity.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
            case EntityType.SpecificKnowledge:
                return entity.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
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
                return entity.employmentCollege.translations[localStorage.getItem('language') as keyof TranslationsObject];
            default:
                return '';
        }
    }
}
