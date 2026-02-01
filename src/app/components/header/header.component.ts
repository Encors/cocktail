import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly isSearchCocktailsPage = signal(false);
  protected router = inject(Router);
  protected destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        tap(this.handleRouterEvent.bind(this)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  handleRouterEvent(): void {
    this.isSearchCocktailsPage.set(this.router.routerState.snapshot.url === '/cocktails');
  }
}
