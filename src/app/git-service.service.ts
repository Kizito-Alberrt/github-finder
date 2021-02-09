import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { Users } from './user';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  user: Users[] = [];
  _URL = 'https://api.github.com/users';
  token = '910e0d1b4c5de11aa68ee347c1dceffcc4ef855f';

  constructor(private http: HttpClient) { }

  searchUser(searchTerm: string) {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      bio: string;
      followers: string;
      following: string;
      public_repos: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.user = [];
      this.http.get<ApiResponse>(this._URL + searchTerm + this.token).toPromise().then((results) => {
        this.user.push(results);
        console.log(results);

        resolve();
      }, (err) => {
        reject();
      }
      )
    })
    return promise;
  }
}
