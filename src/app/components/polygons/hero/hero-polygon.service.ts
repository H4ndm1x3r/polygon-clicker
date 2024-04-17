import { Injectable, effect, inject, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MouseClickService } from '../../upgrades';

const COOKIE_KEY = 'click-counter';

@Injectable({ providedIn: 'root' })
export class HeroPolygonService {
  public readonly accumulatedClicks = signal(0);

  private readonly cookieService = inject(CookieService);
  private readonly mouseClickService = inject(MouseClickService)
  
  constructor() {
    const storedValue = this.cookieService.get(COOKIE_KEY);

    if (storedValue) {
      const parsedValue = parseInt(storedValue, 10);

      if (!isNaN(parsedValue)) {
        this.accumulatedClicks.set(parsedValue);
      }
    }

    effect(() => {
      this.cookieService.set(COOKIE_KEY, `${this.accumulatedClicks()}`);
    })
  }

  public incrementClick() {
    this.accumulatedClicks.update((accumulatedClicks) => accumulatedClicks + this.mouseClickService.value());
  }
}