import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/components/home/home.component";
import { ArticlesComponent } from "./articles/articles.component";
//import { ArticleListResolver } from "./services/resolvers/article-list-resolver";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    //redirectTo: 'articles'
  },
  // {
  //   path: "articles",
  //   component: ArticlesComponent,
  //   resolve: { movies: ArticleListResolver }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
