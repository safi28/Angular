import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from 'src/app/models/article';

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.css"]
})
export class FoodComponent implements OnInit {
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

  selectCauseHandler(cause: Article) {
    this.articleApi.selectCause(cause);
  }
}
