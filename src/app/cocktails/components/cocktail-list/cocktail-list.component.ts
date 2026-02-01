import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderComponent } from '@app/components/loader/loader.component';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-cocktail-list',
  imports: [LoaderComponent, Card],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {
  readonly cocktailsService = inject(CocktailsService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly cocktails = this.cocktailsService.foundDrinks;

  goToCard(id: string): void {
    void this.router.navigate([id], { relativeTo: this.route });
  }
}
