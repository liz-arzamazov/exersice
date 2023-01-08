import { Component } from '@angular/core';
import { IPatientDetails } from './types/types';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercise';
  patients: IPatientDetails[] = [];

  searchValue1 = '';
  searchValue2 = '';
  searchValue3 = '';

  searchProp: string = '';

  sortByParam = '';
  sortDirection = 'asc';

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.HttpClient.get('http://localhost:3000/patients').subscribe(
      (data: any) => {
        this.patients = data;
      }
    );
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }
}
