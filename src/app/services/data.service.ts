import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "http://localhost:8000/api/continent/";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${this.url}`)
  }
}
