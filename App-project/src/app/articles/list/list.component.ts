import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { ArticleService } from "../article.service";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from 'src/app/auth/auth.service';

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
    return this.articleApi.articles$;
  }

  constructor(
    private articleApi: ArticleService,
    private articleService: ArticleService,
    private user: AuthService  ) {}

  ngOnInit() {
    this.articleApi.loadArticle().subscribe(data => {
      this.articles = data;
    });
  }

  isCreator() {
    return !!this.user.loggedUser
  }

  selectCauseHandler(cause: Article) {
    this.articleService.selectCause(cause);
  }
}
