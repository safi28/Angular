import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreateComponent, DetailComponent, ListComponent],
  imports: [CommonModule, ArticlesRoutingModule, ReactiveFormsModule]
})
export class ArticlesModule {}
