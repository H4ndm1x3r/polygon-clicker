import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MenuService {
  public readonly showMenu = signal(true);
}