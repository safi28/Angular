import { Component, OnInit, Input } from "@angular/core";
import Article from "../models/article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input("article") article: Article;
  imagePath: string;

  constructor() {}

  ngOnInit() {
    this.imagePath =
      "https://www.adventureinyou.com/wp-content/uploads/2016/09/10-insanely-awesome-adventure-nepal_LEAD.jpg" +
      this.article.poster_path;
  }
}
