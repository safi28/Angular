import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { TravelComponent } from "./travel/travel/travel.component";
import { LandscapesComponent } from "./travel/landscapes/landscapes.component";
import { RelaxComponent } from "./travel/relax/relax.component";
import { AdventureComponent } from "./travel/adventure/adventure.component";
import { AppMaterialModule } from "../app-material/app-material.module";
import { MatGridListModule } from "@angular/material/grid-list";
import { ArticleComponent } from "./article/article.component";
import { MatSelectModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ArticleService } from "./article.service";
import { FastFoodComponent } from './food/fast-food/fast-food.component';
import { HomeMadeComponent } from './food/home-made/home-made.component';
import { RestaurantsComponent } from './food/restaurants/restaurants.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    ListComponent,
    TravelComponent,
    LandscapesComponent,
    RelaxComponent,
    AdventureComponent,
    ArticleComponent,
    FoodComponent,
    FastFoodComponent,
    HomeMadeComponent,
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [ArticleService],
  exports: [ListComponent, DetailComponent]
})
export class ArticlesModule {}
