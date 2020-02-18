import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ArticleService } from './article.service';
import { Article } from '../models/article';

@Injectable()
export class SingleArticleResolver implements Resolve<Article> {
  constructor(private articleService: ArticleService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    return this.articleService.getIdArticle(id);
  }
}
