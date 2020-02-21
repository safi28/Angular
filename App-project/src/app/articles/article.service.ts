import { Injectable, Input } from "@angular/core";
import { Article } from "../models/article";
import { tap, map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles: Article[];
  optionText: string;
  id: string;

  readonly selectedArticle: Article;
  articles$: Observable<Article[]>;

  constructor(private af: AngularFirestore) {}

  createArticleFood(article: Article) {
    return this.af.collection(`/food`).add(article);
  }

  createArticlTravel(article: Article) {
    return this.af.collection(`/travel`).add(article);
  } 

  loadFoodArticle() {
    return this.af
      .collection<Article>(`/food`)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Article;
            const id = a.payload.doc.id;
            this.id = id;
            return { id, ...data };
          })
        )
      );
  }

  loadTravelArticle() {
    return this.af
      .collection<Article>(`/travel`)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Article;
            const id = a.payload.doc.id;
            this.id = id;

            return { id, ...data };
          })
        )
      );
  }

  loadArticle() {
    return this.af
      .collection<Article>(
        `/travel`
      )
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

  selectCause(cause: Article) {
    (this as any).selectedArticle = cause;
  }

}
