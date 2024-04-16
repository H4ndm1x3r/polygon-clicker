import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, debounceTime, first } from 'rxjs';

const COOKIE_KEY = 'click-counter';

@Injectable({ providedIn: 'root' })
export class HeroPolygonService {
  public readonly clickCounter$ = new BehaviorSubject(0);

  private readonly cookieService = inject(CookieService);
  
  constructor() {
    const storedValue = this.cookieService.get(COOKIE_KEY);

    if (storedValue) {
      const parsedValue = parseInt(storedValue, 10);

      if (!isNaN(parsedValue)) {
        this.clickCounter$.next(parsedValue);
      }
    }

    this.clickCounter$.pipe(debounceTime(200)).subscribe((newClickCount) => {
      this.cookieService.set(COOKIE_KEY, newClickCount.toString());
    })
  }

  public incrementClick() {
    this.clickCounter$.pipe(first()).subscribe((clickCount) => this.clickCounter$.next(clickCount + 1));
  }
}