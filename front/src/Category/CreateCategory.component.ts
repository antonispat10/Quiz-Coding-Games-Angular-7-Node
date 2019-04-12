import {Component, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Subscription } from "rxjs";

import { SharedService } from "../shared/shared.service";

@Component({
  templateUrl: "./CreateCategory.component.html",
  styleUrls: ["./CreateCategory.component.css"]
})
export class CreateCategory implements OnInit {
  private authStatusSub: Subscription;
  @ViewChild('createCategoryForm') form;
  formattedMessage = false;
  oldVal = {};
  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      fileName: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }

  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ fileName: file });
    this.form.get("fileName").updateValueAndValidity();
    console.log(this.form.get('fileName'))
  }

  onCreateCategory() {
    this.sharedService.createCategory(this.form.value);
  }

}
