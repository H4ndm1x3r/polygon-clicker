import { Injectable, computed, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MouseClickService {
  private readonly baseValue = signal(1);
  private readonly multiplier = computed(() => 2);

  public readonly value = signal(this.baseValue() * this.multiplier());
}