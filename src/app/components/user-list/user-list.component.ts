import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];  // Array to hold user data
  displayedColumns: string[] = ['id', 'name', 'email','role'];  // Columns to display in the table
  dataSource = new MatTableDataSource<any>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.dataSource.data = this.users;  // Update the data source for the table
        this.dataSource.paginator = this.paginator;  // Set paginator
        this.dataSource.sort = this.sort;  // Set sorting
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
}
