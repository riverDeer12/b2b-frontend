import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';
import {Equipment} from "../models/equipment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {

    equipmentUrl = environment.apiUrl + '/scientists/';

    newEquipment = new Subject<any>();

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

    pingNewEquipment(): void {
        this.newEquipment.next({success: true});
    }

    listenEquipment(): Observable<any> {
        return this.newEquipment.asObservable();
    }
}
