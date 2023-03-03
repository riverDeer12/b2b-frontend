import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = environment.apiUrl + '/newsletters';

  constructor(private http: HttpClient) { }

  passwordReset(email: string) {
    return this.http.post(this.usersUrl + '/passwordReset', email);
  }

  registerUser(user: User) {
    return this.http.post(this.usersUrl + '/register', user);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.usersUrl + '/delete/' + userId);
  }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl + '/get');
  }
}
