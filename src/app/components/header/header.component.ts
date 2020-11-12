import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public search: string;
  public homepage = false;
  constructor(private router: Router, private filterService: FilterService) {}

  ngOnInit(): void {
    this.search = '';

    this.router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((navigationEnd) => {
      this.homepage = navigationEnd.url === '/';
    });
  }

  onSearchChange(value: string): void {
    this.search = value;
    this.filterService.onUserInput(this.search);
  }
}
