import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input() selectArticles2: Article;
  item: Observable<Article[]>;
  article: Article;

  isRouteComponent = false;

  get selectedArticle() {
    return this.articlesService.selectedArticle;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticleService,
    private af: AngularFireDatabase
  ) {
    // this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetchCause;
  }

  ngOnInit() {
    // if (this.isRouteComponent) {
    //   this.articlesService.loadIdArticle().subscribe(el => {
    //     // this.item = el.keys
    //   });
    // }
    this.article = this.activatedRoute.snapshot.data["singleArticle"];
  }
}
