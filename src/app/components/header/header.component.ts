import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroPolygonService } from '../polygons';
import { AsyncPipe, NgClass } from '@angular/common';
import { MenuComponent, MenuService } from '../menu';

@Component({
  selector: 'clicker-header',
  standalone: true,
  imports: [AsyncPipe, NgClass, MenuComponent],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly heroPolygonService = inject(HeroPolygonService);
  public readonly menuService = inject(MenuService);

  public toggleMenu(): void {
    const currentMenuState = this.menuService.showMenu();

    this.menuService.showMenu.set(!currentMenuState);
  }
}