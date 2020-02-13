import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LoggedHomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from '../app.component';
import { CoreRouting } from './core-routing.module';


@NgModule({
  declarations: [NavigationComponent, LoggedHomeComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRouting
  ],
  exports: [NavigationComponent,FooterComponent]
})
export class CoreModule { }
