import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input() selectArticles2: Article;
  item: Observable<Article[]>;
  article: Article;

  id: string;
  article$: Observable<Article>;

  isRouteComponent = false;

  get selectedArticle() {
    return this.articlesService.selectedArticle;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticleService,
    private db: AngularFirestore
  ) {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.article$ = this.db.doc<Article>("travel/" + this.id).valueChanges();
  }
}
