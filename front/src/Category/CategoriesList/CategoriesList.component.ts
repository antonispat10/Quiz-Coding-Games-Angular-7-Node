import {Component, OnInit, OnDestroy} from "@angular/core";
import { SharedService } from "../../shared/shared.service"
import {Category} from "../../models/Category";
import {PageEvent} from "@angular/material";
import { Subscription } from "rxjs";
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: "app-categories-list",
  templateUrl: "./CategoriesList.component.html",
  styleUrls: ["./CategoriesList.component.css"]
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[];
  currentPage = 1;
  categoriesPerPage = 12;
  count;
  categoriesSub: Subscription;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesSub = this.sharedService.getCategories(this.currentPage, this.categoriesPerPage)
      .subscribe(values => {
        console.log(values)
        this.count = values.count;
        this.categories = values.categories;
      })
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.categoriesPerPage = pageData.pageSize;
    this.getCategories();
  }

  ngOnDestroy() {
    this.categoriesSub.unsubscribe();
  }

}
