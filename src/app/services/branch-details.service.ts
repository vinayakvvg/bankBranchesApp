import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchDetailsService {

  BASE_URL: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  // REST call to get bank info
  getBranchInfo(city) {
    let URL = this.BASE_URL + '?city=' + city;
    console.log('inside service', city, URL);
    return this.httpClient.get(URL)
      .pipe(map((response: Response) => {
        console.log('branchData', response);
        return response;
      }, error => { console.error(error) }));
  }
}
