import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  _URL = 'https://api.github.com/users/';
  token = '?0e401360d1191524777911baa30a34f36e95560c';

  constructor(public http: HttpClient) { }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos');
  }
}
