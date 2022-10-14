import {Observable, Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Directory } from '../models/directory.model';

@Injectable({
  providedIn: 'root',
})
export class DirectoryServiceService {
  private _apiUrl = 'https://cors-anywhere.herokuapp.com/https://reqres.in/api/users';
  public dirSubject = new Subject();

  constructor(private http: HttpClient) {}

  //PASSING Directories data

  /**
   *
   * @param {Directory} dir
   */
  addDirectory(dir:Directory):void{
    let data = {
      action:"create",
      dir: dir,
    }
    this.dirSubject.next(data);
  }

  //API REQUESTS

  /**
   * GET - /:id
   * @param  {number} id
   * @returns Observable
   */
  getDirectory(id: number): Observable<any> {
    return this.http.get(`${this._apiUrl}/${id}`);
  }

  /**
   * GET - /
   * @param {number} id
   * @returns {Observable<any>}
   */
  getAllDirectories(id:number):Observable<any>{
    return this.http.get(`${this._apiUrl}/`);
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
    return this.http.post(`${this._apiUrl}/`, dir);
  }
}
