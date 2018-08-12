import { Component } from '@angular/core';
import { SearchService } from './search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page = 1;
  pageSize = 10;
  listsize = 0;
  list = [];
  constructor(private searchService: SearchService) {

  }
  getPage() {
    if (this.list.length > 0) {
      return this.list.slice(this.page * this.pageSize, this.page * this.pageSize + this.pageSize);
    }
    else {
      return this.list;
    }
  }
  onSearch() {
    this.searchService.getData().subscribe((res: any) => {
      this.page = 1;
      this.list = res;
      this.listsize = this.list.length;
    });
  }
  ngOnInit() {

  }
}
