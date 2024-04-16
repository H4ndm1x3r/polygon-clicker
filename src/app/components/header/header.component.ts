import { Component, inject } from '@angular/core';
import { HeroPolygonService } from '../polygons';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'clicker-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss'
})
export class HeaderComponent {
  public readonly heroPolygonService = inject(HeroPolygonService);
}