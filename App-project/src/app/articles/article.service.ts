import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { tap, map } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];

  readonly selectedArticle: Article;
  articles$: Observable<Article[]>;

  constructor(private af: AngularFirestore) {}

  loadArticle() {
    return this.af
      .collection<Article>("/travel")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Article;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  createArticle(article: Article) {
    return this.af.collection("/travel").add(article);
  }

  selectCause(cause: Article) {
    (this as any).selectedArticle = cause;
  }
}
