import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { CreateComponent } from "../create/create.component";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input() selectArticles2: Article;
  @ViewChild(CreateComponent, { static: false }) detailKey;

  key: string;
  item: Observable<Article[]>;
  article: Article;

  id: string;
  article$: Observable<Article>;
  articleFood: Observable<Article>;

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
    this.articleFood = this.db.doc<Article>("food/" + this.id).valueChanges();

    // if (this.detail.details === "food") {
    //   this.articleFood = this.db.doc<Article>("food/" + this.id).valueChanges();
    // } else if (this.detail.details === "travel") {
    //   this.article$ = this.db.doc<Article>("travel/" + this.id).valueChanges();
    // }
  }

  // ngAfterViewInit() {
  //   this.key = this.detailKey.key;

  //   console.log(this.key);
  // }
}
