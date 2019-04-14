import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from 'src/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuth = isAuthenticated;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
