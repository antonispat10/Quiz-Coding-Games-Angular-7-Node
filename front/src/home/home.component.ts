import {Component, OnInit} from "@angular/core";
import { SharedService } from "../shared/shared.service"
import {Category} from "../models/Category";
import {PageEvent} from "@angular/material";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categories: Category[];
  currentPage = 1;
  categoriesPerPage = 12;
  count;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.sharedService.getCategories(this.currentPage, this.categoriesPerPage)
      .subscribe(values => {
        console.log(values)
        this.count = values.count as number;
        this.categories = values.categories as Category[];
      })
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.categoriesPerPage = pageData.pageSize;
    this.getCategories();
  }


}
