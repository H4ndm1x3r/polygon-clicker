import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { HeaderComponent, HeroPolygonService, MenuService } from './components';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  providers: [HeroPolygonService, MenuService],
  selector: 'clicker-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'polygon-clicker';

  ngOnInit(): void {
    injectSpeedInsights();
  }
}
