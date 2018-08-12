import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('https://next.json-generator.com/api/json/get/Ny6cJAdSr');
  }
}
