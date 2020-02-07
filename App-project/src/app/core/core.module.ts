import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent,FooterComponent]
})
export class CoreModule { }
