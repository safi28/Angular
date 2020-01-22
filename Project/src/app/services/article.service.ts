import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
import Article from "../models/article";

const BASE_URL = "https://www.pinterest.com/";

const TRAVEL = "pin/336362665918173708/";
const FOOD = "pin/319544536061093473/";
const COFFEE_SHOP = "pin/558446422546092076/";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getTravelArticles(): Observable<Array<Article[]>> {
    return this.http
      .get<Article[]>(BASE_URL + TRAVEL)
      .pipe(map(data => data["results"]));
  }
}
