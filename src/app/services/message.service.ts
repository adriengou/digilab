import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = `${environment.API_URL}/api/messages`;

  constructor(private http: HttpClient) {}

  getMessages(friendName:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/friendmessages/${friendName}`)
  }

  getAllMessages():Observable<any>{
    return this.http.get(`${this.apiUrl}/friendmessages`)
  }
}
