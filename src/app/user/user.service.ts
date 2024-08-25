import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Kevin'},

  ]

  constructor() {}

  getUsers(){
    // creates an Observable that emits the users array and then completes.
    return of(this.users);
  }
}
