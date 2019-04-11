import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Category} from "../models/Category";
import {Observable, Subject} from "rxjs/index";
import {environment} from "../environments/environment";
import {map} from "rxjs/internal/operators";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class SharedService {
  generatedLink = new Subject<string>();

  constructor(private http: HttpClient) {}

  createCategory(data: Category) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("fileName", data.fileName);
      console.log(formData)
    return this.http
        .post(`${BACKEND_URL}/category`, formData)
        .subscribe(data => {
          console.log(data)
        },
        error => {
          console.log(error)
        })
  }

  getCategories(currentPage: number, categoriesPerPage: number): Observable<{categories: Category[], count: number}> {
      const queryParams = `?pagesize=${categoriesPerPage}&page=${currentPage}`;

      return this.http
          .get<any>(BACKEND_URL + 'categories' +queryParams)
          .pipe(
              map(values => {
                  return {
                      categories: values.categories.map(category => {
                          return {
                              id: category._id,
                              name: category.name,
                              filePath: category.filePath
                          };
                      }),
                      count: values.count
                  };
              })
          );
  }

  createQuiz(data, category) {
    return this.http.post(`${BACKEND_URL}createQuiz`, {...data, category})
}

}
