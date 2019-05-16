import { UsersListService, Users } from '../../../../../libs/core-data/src/index';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'github-demo-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Users[];

  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersListService.getAllUsers()
    .subscribe((result: any) => this.users = result);
  }

  search(searchTerm: string) {
    if(searchTerm) {
      console.log('looking for user... ', searchTerm);
      this.usersListService.searchUsers(searchTerm).subscribe(users => this.users = users);
      console.log(this.users)
    }
  }

}
