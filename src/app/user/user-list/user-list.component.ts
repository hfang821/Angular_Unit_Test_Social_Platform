import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // usually we would need to define models and interfaces for the data, but for simplicity we will use any
  users: any[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
