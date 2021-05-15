import { Component, OnInit} from '@angular/core';
import { AuthService } from './service/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { navItems } from './helpers/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  visibility = false;
  items = navItems;
  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => { });

    this.router.events.pipe(
      filter(events => events instanceof NavigationEnd),
      map(evt => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    ).pipe(
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(x => x.navbars === true ? this.visibility = true : this.visibility = false);
  }
}
