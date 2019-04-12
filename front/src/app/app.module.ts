import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "../Header/Header.component";
import { CreateCategory } from "../Category/CreateCategory.component";

import { AppRoutingModule } from "../app-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import {Interceptor} from "../interceptor";
import {ErrorInterceptor} from "../error-interceptor";
import {HomeComponent} from "../Home/home.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {CreateQuizComponent} from "../Quiz/CreateQuiz/CreateQuiz.component";
import { PlayQuizComponent } from 'src/Quiz/PlayQuiz/PlayQuiz.component';
import { ErrorComponent } from 'src/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategory,
    HomeComponent,
    CreateQuizComponent,
    PlayQuizComponent,
    ErrorComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
