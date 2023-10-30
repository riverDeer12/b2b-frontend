import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../../../../shared/models/entity';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';
import {Equipment} from '../../../../equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../../specific-knowledge/core/models/specific-knowledge';
import {CommunicationService} from '../../../../shared/services/communication.service';
import {DialogFormComponent} from '../../../../shared/components/dialog-form/dialog-form.component';
import {FormType} from '../../../../shared/enums/form-type';
import {DialogContentTypes} from '../../../../shared/constants/dialog-content-types';
import {DialogService} from 'primeng/dynamicdialog';
import {AuthService} from '../../../../auth/core/services/auth.service';
import {NotificationType} from '../../../../shared/enums/notification-type';
import {NotificationService} from '../../../../shared/services/notification.service';

@Component({
    selector: 'entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {
    currentEntityType!: EntityType;

    entityItem!: any;

    simpleEntity!: boolean;

    entityCategories!: Category[];

    researchProblems!: ResearchProblem[];

    equipmentList!: Equipment[];

    specificKnowledgeList!: SpecificKnowledge[];

    public get hasResearchProblems(): boolean {
        const validEntityType = this.currentEntityType === EntityType.Company ||
            this.currentEntityType === EntityType.Organization;

        if (!validEntityType) return false;

        return this.entityItem.researchProblems.length;
    }

    public get hasEquipment(): boolean {
        const isScientist = this.currentEntityType == this.entityType.Scientist;

        return isScientist && this.entityItem.equipment.length;
    }

    public get hasSpecificKnowledge(): boolean {
        const isScientist = this.currentEntityType == this.entityType.Scientist;

        return isScientist && this.entityItem.specificKnowledge.length;
    }

    public get entity(): typeof Entity {
        return Entity;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    public get showContactButton(): boolean {
        return this.currentEntityType !== this.entityType.News;
    }

    constructor(private activatedRoute: ActivatedRoute,
                private authService: AuthService,
                private notificationService: NotificationService,
                private communicationService: CommunicationService,
                private dialogService: DialogService) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.currentEntityType = this.activatedRoute.snapshot.params['entityType'] as EntityType;

            this.entityItem = Entity.assignResponseToEntity(this.currentEntityType, response);

            this.initCategories();

            this.initSubEntities();
        });
    }

    /**
     * Opens dialog for
     * sending message to entity.
     */
    openMessageDialog() {

        if (!this.authService.userLogged()) {
            this.notificationService
                .showNotification(NotificationType.Warning, 'communications.not-logged');
            return;
        }

        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'communications.send-message',
                formType: FormType.Create,
                contentType: DialogContentTypes.Message
            }
        })
    }

    private initCategories(): void {
        this.entityCategories = this.entityItem.categories.map((x: Category) =>
            Object.assign(new Category(), x)
        );
    }

    private initSubEntities(): void {
        if (this.hasResearchProblems) {
            this.initResearchProblems();
        }

        if (this.currentEntityType === EntityType.Scientist) {
            this.initEquipment();
            this.initSpecificKnowledge();
        }
    }

    private initResearchProblems() {
        this.researchProblems = this.entityItem.researchProblems.map((x: ResearchProblem) =>
            Object.assign(new ResearchProblem(), x)
        );
    }

    private initEquipment() {
        this.equipmentList = this.entityItem.equipment.map((x: Equipment) =>
            Object.assign(new Equipment(), x)
        );
    }

    private initSpecificKnowledge() {
        this.specificKnowledgeList = this.entityItem.specificKnowledge.map((x: SpecificKnowledge) =>
            Object.assign(new SpecificKnowledge(), x)
        );
    }
}
