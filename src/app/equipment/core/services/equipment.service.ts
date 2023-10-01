import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';
import {Equipment} from '../models/equipment';
import {EntityType} from "../../../auth/core/enums/entity-type";

/**
 * Service that provides communication between
 * equipment module and endpoints on api
 * which correspond to equipment entity.
 */
@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    scientistsEquipmentUrl = environment.apiUrl + '/scientists/';

    equipment = new Subject<Equipment>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get equipment entities
     * created on platform.
     */
    getAllEquipment = () => this.http.get<Equipment[]>(environment.apiUrl + '/' + EntityType.Equipment);

    /**
     * Get equipment for selected
     * scientists.
     *
     * @param scientistId id of related scientist entity.
     */
    getEquipment = (scientistId: string) =>
        this.http.get<Equipment[]>(this.scientistsEquipmentUrl + scientistId + '/' + EntityType.Equipment);

    /**
     * Find equipment entity by identifier.
     *
     * @param scientistId id of related scientist entity.
     * @param id equipment entity identifier.
     */
    getSingleEquipment = (scientistId: string, id: string) =>
        this.http.get<Equipment>(this.scientistsEquipmentUrl + scientistId + '/'
            + EntityType.Equipment + '/' + id);

    /**
     * Create equipment entity with
     * data from form.
     *
     * @param scientistId id of related scientist entity.
     * @param postData form data for creating equipment.
     */
    createEquipment = (scientistId: string, postData: Equipment) =>
        this.http.post<Equipment>(this.scientistsEquipmentUrl + scientistId + '/'
            + EntityType.Equipment, postData);

    /**
     * Update existing equipment data
     * with update data from form.
     *
     * @param scientistId id of related scientist entity.
     * @param id equipment entity identifier.
     * @param updateData form data for updating existing equipment.
     */
    editEquipment = (scientistId: string, id: string, updateData: Equipment) =>
        this.http.put<Equipment>(this.scientistsEquipmentUrl + scientistId + '/'
            + EntityType.Equipment + '/' + id, updateData);

    /**
     * Delete equipment entity.
     *
     * @param scientistId id of related scientist entity.
     * @param id equipment entity identifier.
     */
    deleteEquipment = (scientistId: string, id: string) =>
        this.http.delete(this.scientistsEquipmentUrl + scientistId + '/' + EntityType.Equipment + '/' + id);

    /**
     * Push new equipment
     * object to current array of equipment
     * items on UI.
     *
     * @param equipment new equipment item
     */
    pingEquipment(equipment: Equipment): void {
        this.equipment.next(equipment);
    }

    /**
     * Listen to changes
     * on current list of equipment
     * items on UI.
     */
    listenEquipment(): Observable<Equipment> {
        return this.equipment.asObservable();
    }
}
