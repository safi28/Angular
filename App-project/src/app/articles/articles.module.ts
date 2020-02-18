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
import { FooterComponent } from '../core/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    ListComponent,
    TravelComponent,
    LandscapesComponent,
    RelaxComponent,
    AdventureComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatGridListModule
    
  ],
  exports: [ListComponent, DetailComponent]
})
export class ArticlesModule {}
