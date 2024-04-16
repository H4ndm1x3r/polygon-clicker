import { Component, HostListener, inject } from '@angular/core';
import { HeroPolygonService } from './hero-polygon.service';

@Component({
  selector: 'clicker-hero-polygon',
  standalone: true,
  // providers: [HeroPolygonService],
  templateUrl: 'hero-polygon.component.html',
  styleUrl: 'hero-polygon.component.scss'
})
export class HeroPolygonComponent {
  private readonly heroPolygonService = inject(HeroPolygonService);

  @HostListener('click') public async onClick(): Promise<void> {
    this.heroPolygonService.incrementClick();
  }

  constructor() {}


}