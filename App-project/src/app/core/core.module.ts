import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedHomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CoreRouting } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './unLoggedHome/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LoggedHomeComponent, FooterComponent,HomeComponent],
  imports: [
    CommonModule,
    CoreRouting,
    FormsModule,
    ReactiveFormsModule,
    CoreRouting
  ],
  exports: [FooterComponent]
})
export class CoreModule { }
