import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "../article.service";
import { Article } from "src/app/models/article";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input("article") article: Article;

  article$: Promise<Article>;
  id: string;

  constructor(
    private articleService: ArticleService,
    private db: AngularFirestore,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
  }

}
