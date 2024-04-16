import { Component, OnInit } from '@angular/core';

import { HeroPolygonComponent } from '../../polygons';

@Component({
  selector: 'clicker-page',
  standalone: true,
  imports: [HeroPolygonComponent],
  templateUrl: 'clicker-page.component.html',
  styleUrl: 'clicker-page.component.scss',
})
export class ClickerPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}