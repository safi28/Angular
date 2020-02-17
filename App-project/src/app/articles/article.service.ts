import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { tap } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

const BASE_URL = "bfa98e492177c8cb6c5e3c472e4444e5abd1063b";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];
  idKey: any;
  readonly selectedArticle: Article;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  loadArticle() {
    return this.db.list(`/travel`).valueChanges();
  }

  loadIdArticle(id?: number) {
    return this.db.list(`/travel${this.idKey}` ? `/${this.idKey}` : "").snapshotChanges();
  }

  createArticle(article: Article) {
    return this.db
      .list(`/travel`)
      .push(article)
      .then(snap => {
        this.idKey = snap.key;
      });
  }

  selectArticle(article: Article) {
    (this as any).selectedArticle = article;
  }
}
