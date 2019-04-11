import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: "root" })
export class SharedService {
  constructor(private http: HttpClient) {}login

  createCategory(data: any) {
    return this.http
        .post('https://localhost:3007', data)
  }

}
