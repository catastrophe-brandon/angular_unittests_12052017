import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { CarsService } from './services/cars.service';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MyUpperCasePipe,
    ToolHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
