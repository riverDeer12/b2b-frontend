import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EntityType} from '../../auth/core/enums/entity-type';
import {RedirectType} from '../enums/redirect-type';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    parentEntityType = new Subject<EntityType>();
    modalCloseStatus = new Subject<string>();

    constructor(private router: Router) {
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
     * modal if action is successfully
     * finished.
     *
     * @param dialogId id of dialog
     * that needs to be closed.
     */
    closeModalOnSuccess(dialogId: string): void {
        this.modalCloseStatus.next(dialogId);
    }

    /**
     * Method that listens on
     * modal close status changes.
     */
    getModalCloseStatus(): Subject<string> {
        return this.modalCloseStatus;
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

        console.log()

        this.closeModalOnSuccess(dialogId as string);
    }
}
