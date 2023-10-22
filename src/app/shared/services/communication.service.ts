import {Injectable} from '@angular/core';
import {EntityType} from 'src/app/auth/core/enums/entity-type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {

    endpointUrl = environment.apiUrl + '/communications/';

    constructor(private http: HttpClient) {
    }

    /**
     * Send message to entity.
     *
     * @param receiverId id of receiver entity.
     * @param entityType type of receiver entity.
     * @param content message content.
     */
    sendMessage(receiverId: string, entityType: EntityType, content: string) {
        return this.http.post(this.endpointUrl + 'messages/send', {
            receiverId,
            entityType,
            content
        });
    }
}
