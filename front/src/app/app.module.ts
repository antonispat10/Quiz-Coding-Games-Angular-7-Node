import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "../Header/Header.component";
import { CreateCategoryComponent } from "../Category/CreateCategory//CreateCategory.component";

import { AppRoutingModule } from "../app-routing.module";
import { AngularMaterialModule } from "../angular-material.module";
import {ErrorInterceptor} from "../error-interceptor";
import {CategoriesListComponent} from "../Category/CategoriesList/CategoriesList.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {CreateQuizComponent} from "../Quiz/CreateQuiz/CreateQuiz.component";
import { PlayQuizComponent } from 'src/Quiz/PlayQuiz/PlayQuiz.component';
import { ErrorComponent } from 'src/Error/Error.component';
import { SearchResultsComponent } from 'src/Quiz/SearchResults/SearchResults.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCategoryComponent,
    CategoriesListComponent,
    CreateQuizComponent,
    PlayQuizComponent,
    SearchResultsComponent,
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
