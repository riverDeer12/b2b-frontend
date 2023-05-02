import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {EntityType} from '../../auth/core/enums/entity-type';
import {RedirectType} from '../enums/redirect-type';
import {Router} from '@angular/router';
import {SpecificKnowledgeService} from '../../specific-knowledge/core/services/specific-knowledge.service';
import {EquipmentService} from '../../equipment/core/services/equipment.service';
import {ResearchProblemService} from '../../research-problems/core/services/research-problem.service';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    parentEntityType = new Subject<EntityType>();
    dialogCloseStatus = new Subject<string>();

    constructor(private router: Router,
                private specificKnowledgeService: SpecificKnowledgeService,
                private equipmentService: EquipmentService,
                private researchProblemService: ResearchProblemService) {
    }

    /**
     * Method that listens on
     * parent entity type changes.
     */
    getParentEntityType(): Subject<EntityType> {
        return this.parentEntityType;
    }

    /**
     * Method that sets
     * and triggers selected
     * parent entity type.
     */
    setParenEntityType(parentEntityType: EntityType): void {
        this.parentEntityType.next(parentEntityType);
    }

    /**
     * Method that triggers
     * dialog if action is successfully
     * finished.
     *
     * @param dialogId id of dialog
     * that needs to be closed.
     */
    closeDialogOnSuccess(dialogId: string): void {
        this.dialogCloseStatus.next(dialogId);
    }

    /**
     * Method that listens on
     * dialog close status changes.
     */
    getDialogCloseStatus(): Subject<string> {
        return this.dialogCloseStatus;
    }

    /**
     * Redirect user after form
     * submit based on redirect type.
     *
     * @param redirectType type of redirection.
     * @param returnUrl url for redirecting user.
     * @param dialogId id of dialog that needs to be closed.
     */
    redirectUserAfterSubmit(redirectType: RedirectType, returnUrl?: string, dialogId?: string): void {
        if (redirectType == RedirectType.Page) {
            this.router.navigateByUrl(returnUrl as string).then();
            return;
        }

        this.closeDialogOnSuccess(dialogId as string);
    }
}
