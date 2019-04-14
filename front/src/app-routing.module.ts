import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategoryComponent } from './Category/CreateCategory/CreateCategory.component'
import { CategoriesListComponent } from './Category/CategoriesList/CategoriesList.component'
import { CreateQuizComponent } from './Quiz/CreateQuiz/CreateQuiz.component'
import { PlayQuizComponent } from './Quiz/PlayQuiz/PlayQuiz.component';
import { SearchResultsComponent } from './Quiz/SearchResults/SearchResults.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: CategoriesListComponent, canActivate: [AuthGuard] },
  { path: "createCategory", component: CreateCategoryComponent, canActivate: [AuthGuard] },
  { path: "createQuiz/:categoryName/:categoryId", component: CreateQuizComponent, canActivate: [AuthGuard] },
  { path: "playQuiz", component: PlayQuizComponent },
  { path: "searchResults", component: SearchResultsComponent, canActivate: [AuthGuard] },
  { path: "", loadChildren: "./auth/auth.module#AuthModule" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
