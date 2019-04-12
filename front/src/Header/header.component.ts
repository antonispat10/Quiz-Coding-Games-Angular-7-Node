import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "../shared/shared.service"

@Component({
  selector: "app-header",
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.css"]
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) {}


}
