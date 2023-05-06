import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';
import {Equipment} from "../models/equipment";
import {SpecificKnowledge} from "../../../specific-knowledge/core/models/specific-knowledge";

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    equipmentUrl = environment.apiUrl + '/scientists/';

    newEquipment = new Subject<Equipment>();

    constructor(private http: HttpClient) {
    }

    getAllEquipment() {
        return this.http.get<Equipment[]>(this.equipmentUrl + '/getEquipment');
    }

    getEquipment(scientistId: string): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(this.equipmentUrl + scientistId + '/getEquipment');
    }

    getSingleEquipment(scientistId: string, equipmentId: string): Observable<Equipment> {
        return this.http.get<Equipment>(this.equipmentUrl + scientistId + '/getEquipment/' + equipmentId);
    }

    createEquipment(scientistId: string, equipment: Equipment): any {
        return this.http.post(this.equipmentUrl + scientistId + '/createEquipment', equipment);
    }

    editEquipment(scientistId: string, equipmentId: string, equipment: Equipment) {
        return this.http.post(this.equipmentUrl + scientistId + '/editEquipment/' + equipmentId, equipment);
    }

    flipEquipmentActive(scientistId: string, equipmentId: string): any {
        return this.http.post(this.equipmentUrl + scientistId + '/flipEquipmentActive/' + equipmentId, null);
    }

    deleteEquipment(scientistId: string, equipmentId: string): any {
        return this.http.post(this.equipmentUrl + scientistId + '/deleteEquipment/' + equipmentId, null);
    }

    /**
     * Push new equipment
     * object to current array of equipment
     * items on UI.
     *
     * @param equipment new equipment item
     */
    pingNewEquipment(equipment: Equipment): void {
        this.newEquipment.next(equipment);
    }

    /**
     * Listen to changes
     * on current list of equipment
     * items on UI.
     */
    listenEquipment(): Observable<Equipment> {
        return this.newEquipment.asObservable();
    }
}
