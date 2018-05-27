import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../config/api.config'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(API.FIND_ALL_CATEGORIES);
  }
}
