import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { tap } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  booksRef: AngularFireList<any>;

  articles: Article[];
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  load() {
    this.booksRef = this.db.list("/travel");
    return this.booksRef;
  }

  selectArticle(article: Article) {
    (this as any).selectArticle = article;
  }
}
