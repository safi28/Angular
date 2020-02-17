import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  @Input() selectArticles2: Article;

  isRouteComponent = false;

  get selectedArticle() {
    // console.log(this.articlesService.selectedArticle);

    return this.articlesService.selectedArticle;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticleService,
    travel: string
  ) {
    this.isRouteComponent = this.activatedRoute.snapshot.data.title;
  }

  ngOnInit() {
    if (this.isRouteComponent) {
    }
    this.articlesService.loadIdArticle().subscribe(a => {
      console.log(a);
    });
  }
}
