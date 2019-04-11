import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./CreateTest.component.html",
  styleUrls: ["./CreateTest.component.css"]
})
export class CreateTestComponent implements OnInit, OnDestroy, AfterViewInit {
  isLoading = false;
  private authStatusSub: Subscription;
  @ViewChild('loginForm') form;
  formattedMessage = false;
  oldVal = {};
  constructor(public authService: AuthService) {}

  ngOnInit() {
console.log(this.formattedMessage)
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe((val, index) => {
      let x = null;

      if (x) {
        console.log('old', this.oldVal, 'new', Object.entries(val))

        this.oldVal = Object.entries(val);
      this.formattedMessage = true;
      }
      console.log(this.formattedMessage, Object.entries(val))
    });
  }



  onCreateTest(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value)
    console.log(this.formattedMessage)
    this.sharedService.login(form.value.email, form.value.password);

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
