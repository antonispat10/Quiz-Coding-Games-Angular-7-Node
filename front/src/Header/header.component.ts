import { Component } from "@angular/core";
import { SharedService } from "../shared/shared.service"

@Component({
  selector: "app-header",
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.css"]
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) {}


}
