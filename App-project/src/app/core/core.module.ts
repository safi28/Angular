import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedHomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CoreRouting } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './unLoggedHome/home.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [LoggedHomeComponent, FooterComponent,HomeComponent, GuideComponent],
  imports: [
    CommonModule,
    CoreRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FooterComponent]
})
export class CoreModule { }
