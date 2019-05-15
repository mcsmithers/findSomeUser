import { UsersListService, Users } from '../../../../../libs/core-data/src/index';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'github-demo-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  selectedUser: Users;
  users: Users[];

  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    this.getUsers();
  }

  selectUser(user) {
    this.selectedUser= user;
    console.log(user);
  }

  getUsers() {
    this.users = this.usersListService.all();
  }

}
