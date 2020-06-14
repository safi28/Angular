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

  ngOnInit() {
    this.articleApi.loadFoodArticle().subscribe(data => {      
      this.articles = data;
    });
  }

}
