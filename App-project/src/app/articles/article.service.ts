import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];
  constructor(private http: HttpClient) {}

  load(id?: number) {
    return this.http
      .get<Article[] | Article>(
        `http://localhost:3000/article${id ? `/${id}` : ""}`
      )
      .pipe(tap(causes => (this.articles = [].concat(causes))));
  }

  selectArticle(article: Article) {
    (this as any).selectArticle = article;
  }
}
