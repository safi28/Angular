import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { CreateComponent } from "../create/create.component";
import { map } from "rxjs/operators";

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
  likes: number = 0;

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
    private db: AngularFirestore,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.article$ = this.db.doc<Article>("travel/" + this.id).valueChanges();
    this.articleFood = this.db.doc<Article>("food/" + this.id).valueChanges();
  }

  deleteFood() {
    this.db.doc<Article>("food/" + this.id).delete();
    this.router.navigate(["/food"]);
  }

  deleteTravel() {
    this.db.doc<Article>("travel/" + this.id).delete();
    this.router.navigate(["/list"]);
  }

  likeFood() {
    this.likes++;
    this.db
      .doc<Article>("food/" + this.id)
      .update({ like: this.likes })
      .then();
  }

  likeTravel() {
    this.likes++;
    this.db
      .doc<Article>("travel/" + this.id)
      .update({ like: this.likes })
      .then();
  }
}
