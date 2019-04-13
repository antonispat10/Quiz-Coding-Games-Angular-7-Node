import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategoryComponent } from './Category/CreateCategory/CreateCategory.component'
import { CategoriesListComponent } from './Category/CategoriesList/CategoriesList.component'
import { CreateQuizComponent } from './Quiz/CreateQuiz/CreateQuiz.component'
import { PlayQuizComponent } from './Quiz/PlayQuiz/PlayQuiz.component';
import { SearchResultsComponent } from './Quiz/SearchResults/SearchResults.component';

const routes: Routes = [
  { path: "", component: CategoriesListComponent },
  { path: "createCategory", component: CreateCategoryComponent },
  { path: "createQuiz/:categoryId", component: CreateQuizComponent },
  { path: "playQuiz", component: PlayQuizComponent },
  { path: "searchResults", component: SearchResultsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
