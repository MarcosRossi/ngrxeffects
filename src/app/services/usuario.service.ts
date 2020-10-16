import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(`${this.url}/users?per_page=6&delay=3`)
      .pipe(map((resp: any) => resp.data));
  }

  getById(id: string) {
    return this.http
      .get(`${this.url}/users/${id}`)
      .pipe(map((resp: any) => resp.data));
  }
}
