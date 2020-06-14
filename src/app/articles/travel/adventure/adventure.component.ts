import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../article.service";

@Component({
  selector: "app-adventure",
  templateUrl: "./adventure.component.html",
  styleUrls: ["./adventure.component.css"]
})
export class AdventureComponent implements OnInit {
  articles: any;

  constructor(private articleApi: ArticleService) {}

  get article() {
    return this.articleApi;
  }

  ngOnInit() {
    this.articleApi.loadFoodArticle().subscribe(data => {
      this.articles = data;
    });
  }
}
