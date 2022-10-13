import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Directory } from '../models/directory.model';

@Injectable({
  providedIn: 'root',
})
export class DirectoryServiceService {
  private _apiUrl =
    'https://cors-anywhere.herokuapp.com/https://6347f7d1db76843976b709f4.mockapi.io/api/directories';

  constructor(private http: HttpClient) {}

  /**
   * GET - /:id
   * @param  {number} id
   * @returns Observable
   */
  getDirectory(id: number): Observable<any> {
    return this.http.get(`${this._apiUrl}/${id}`);
  }

  /**
   * POST - /
   * @param  {Directory} dir
   * @returns Observable
   */
  createDirectory(dir: Directory): Observable<any> {
    return this.http.post(`${this._apiUrl}/users`, dir);
  }
  /**
   * PUT - /:id
   * @param  {number} id
   * @param  {string} name
   * @param  {string} path
   * @param  {string} description
   * @returns Observable
   */
  updateDirectory(
    id: number,
    name: string,
    path: string,
    description: string
  ): Observable<any> {
    let dir = new Directory(name, path, description, id);
    return this.http.post(`${this._apiUrl}/users/create`, dir);
  }
}
