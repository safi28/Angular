import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { tap, map } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];
  idKey: any;
  readonly selectedArticle: Article;
  public keys: any;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  loadArticle() {
    return this.db.list("/travel").valueChanges();
  }

  loadIdArticle() {
    return this.db
      .list(`/travel`)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(x => ({ key: x.payload.key, ...x.payload.child }))
        ),
        tap(next => {
          this.keys = next;
        })
      );
  }

  getIdArticle(id: string) {
    return this.http.get<Article>(
      "https://app-project-82053.firebaseio.com/" + `travel/${id}`
    );
  }
  createArticle(article: Article) {
    return this.db.list(`/travel`).push(article);
  }

  selectArticle(article: Article) {
    (this as any).selectedArticle = article;
  }
}
