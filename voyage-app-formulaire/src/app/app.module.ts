import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableauSejoursComponent } from './tableau-sejours/tableau-sejours.component';
import { CarouselSejoursComponent } from './carousel-sejours/carousel-sejours.component';
import { SejourService } from "./shared/service/sejour.service";
import { EditerSejourComponent } from './editer-sejour/editer-sejour.component';

const appRoutes: Routes = [
  { path: 'sejours', component: TableauSejoursComponent },
  { path: 'carousel', component: CarouselSejoursComponent },
  { path: 'sejours/:id', component: EditerSejourComponent },
  { path: '**', redirectTo: 'sejours'}
];

@NgModule({
  declarations: [
    AppComponent,
    TableauSejoursComponent,
    CarouselSejoursComponent,
    EditerSejourComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SejourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
