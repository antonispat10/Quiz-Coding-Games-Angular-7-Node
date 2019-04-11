import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategory } from './login/create-category.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "createCategory", component: CreateCategory },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
