import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public search: string;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.search = '';
  }

  onSearchChange(value: string): void {
    this.search = value;
    this.filterService.onUserInput(this.search);
    console.log(value);
  }

  set _search(value: string) {
    this.search = value;
    this.filterService.onUserInput(this.search);
    console.log(value);
  }
}