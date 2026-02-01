import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Cocktail } from '@app/cocktails/utils/interfaces';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoaderComponent } from '@app/components/loader/loader.component';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-cocktail-list',
  imports: [LoaderComponent, Card],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent implements OnInit {
  readonly cocktails = signal<Array<Cocktail>>([]);

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);
  protected router = inject(Router);
  protected route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.cocktailsService.foundDrinks$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(res => this.cocktails.set(res)),
      )
      .subscribe();
  }

  goToCard(id: string): void {
    void this.router.navigate([id], { relativeTo: this.route });
  }
}
