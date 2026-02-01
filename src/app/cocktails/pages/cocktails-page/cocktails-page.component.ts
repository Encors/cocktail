import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchPanelComponent } from '@app/cocktails/components/search-panel/search-panel.component';
import { CocktailListComponent } from '@app/cocktails/components/cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-cocktails-page',
  imports: [SearchPanelComponent, CocktailListComponent],
  templateUrl: './cocktails-page.component.html',
  styleUrl: './cocktails-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CocktailsPageComponent {
  protected year = new Date().getFullYear();
}
