import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { routeTransition } from './shared/animations/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <main class="page-wrap" [@routeTransition]="getAnimationState(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  styles: [
    `
      .page-wrap {
        position: relative;
        min-height: 60vh;
        padding: 16px 0;
      }
    `,
  ],
  animations: [routeTransition],
})
export class AppComponent {
  title = 'Arsi';

  // IMPORTANT: Guard with isActivated before touching activatedRoute* APIs
  getAnimationState(outlet: RouterOutlet) {
    if (!outlet || !outlet.isActivated) {
      // Return a stable fallback string (null would disable updates)
      return 'initial';
    }
    const dataKey = outlet.activatedRouteData?.['animation'];
    const urlKey =
      outlet.activatedRoute.snapshot.url.map((s) => s.path).join('/') || 'root';
    return dataKey ?? urlKey;
  }
}
"// trigger deploy" 
