import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const COOKIE_KEY = 'SHOW_MENU';

@Injectable({providedIn: 'root'})
export class MenuService {
  public readonly showMenu = signal(false);
  
  private readonly cookieService = inject(CookieService);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    const isBrowser = isPlatformBrowser(platformId);

    if (isBrowser) {
      const storedValue = this.cookieService.get(COOKIE_KEY);
  
      this.showMenu.set(JSON.parse(storedValue));
  
      effect(() => this.cookieService.set(COOKIE_KEY, `${this.showMenu()}`));
    }
  }
}