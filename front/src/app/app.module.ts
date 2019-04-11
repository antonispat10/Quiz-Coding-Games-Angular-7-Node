import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "../Header/header.component";
import { CreateCategory } from "../Category/create-category.component";

import { AppRoutingModule } from "../app-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import {Interceptor} from "../interceptor";
import {HomeComponent} from "../Home/home.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {CreateQuizComponent} from "../Quiz/CreateQuiz/CreateQuiz.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategory,
    HomeComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
