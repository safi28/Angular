import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('article') article: Article

  constructor(
    private articleService: ArticleService  ) {}
    
  ngOnInit() {
    // this.articleService.loadArticle().subscribe(data => {
    //   this.articles = data;
    // });
  }

}
