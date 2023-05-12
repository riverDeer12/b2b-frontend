import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {EntityType} from '../../auth/core/enums/entity-type';
import {RedirectType} from '../enums/redirect-type';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    parentEntityType = new Subject<EntityType>();
    dialogCloseStatus = new Subject<string>();

    constructor(private router: Router, private http: HttpClient) {
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

    /**
     * Send request for changing
     * entity's activity.
     *
     * @param entityUrl url of entity's activity endpoint.
     * @param entityId id of selected entity.
     */
    changeEntityActivity(entityUrl: string, entityId: string): Observable<any> {
        return this.http.post(entityUrl + '/flipActive', entityId);
    }
}
