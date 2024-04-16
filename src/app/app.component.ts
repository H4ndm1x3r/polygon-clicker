import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  standalone: true,
  imports: [RouterModule],
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
