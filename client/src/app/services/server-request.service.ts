import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  readonly URL;

  constructor(private httpClient: HttpClient) {
    this.URL = 'http://localhost:1337';
  }

  get(uri: string) {
    return this.httpClient.get(`${this.URL}/${uri}`);
  }

  post(uri: string, body: Object) {
    return this.httpClient.post(`${this.URL}/${uri}`, body);
  }

  patch(uri: string, body: Object) {
    return this.httpClient.patch(`${this.URL}/${uri}`, body);
  }

  delete(uri: string) {
    return this.httpClient.delete(`${this.URL}/${uri}`);
  }
}

