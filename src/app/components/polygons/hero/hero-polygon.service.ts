import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroPolygonService {
  public readonly clickCounter$ = new BehaviorSubject(0);

  public incrementClick() {
    this.clickCounter$.pipe(first()).subscribe((clickCount) => this.clickCounter$.next(clickCount + 1));
  }
}