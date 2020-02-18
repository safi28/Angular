import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Article } from "src/app/models/article";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  articles: any;
  selectedArticle: Article;
  public key: string;

  get article() {
    return this.articleApi.articles;
  }

  @Output() selectArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private articleApi: ArticleService) {}

  ngOnInit() {
    this.articleApi.loadArticle().subscribe(data => {
      this.articles = data;
    });
  }

  selectArticleHandler(id) {
    // this.articleApi.selectArticle(article);
    return this.articleApi.getIdArticle(id);

  }
}
