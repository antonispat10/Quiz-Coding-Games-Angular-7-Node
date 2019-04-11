import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategory } from './Category/create-category.component'
import { HomeComponent } from './Home/home.component'
import { CreateQuizComponent } from './Quiz/CreateQuiz/CreateQuiz.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "createCategory", component: CreateCategory },
  { path: "createQuiz/:categoryId", component: CreateQuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
