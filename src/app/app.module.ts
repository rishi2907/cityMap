import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DropdownComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDzCP5oMHWf1dNgcIdchURB1UP5t0mMt70'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
