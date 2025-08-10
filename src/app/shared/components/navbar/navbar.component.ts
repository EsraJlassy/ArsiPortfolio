import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="nav-inner" aria-label="Primary">
        <ul class="nav-list">
          <li>
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              #rlaHome="routerLinkActive"
              [attr.aria-current]="rlaHome.isActive ? 'page' : null"
            >
              home
            </a>
          </li>
          <li>
            <a
              routerLink="/portfolio"
              routerLinkActive="active"
              #rlaPortfolio="routerLinkActive"
              [attr.aria-current]="rlaPortfolio.isActive ? 'page' : null"
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              routerLink="/artwork"
              fragment="artwork"
              routerLinkActive="active"
              #rlaArtwork="routerLinkActive"
              [attr.aria-current]="rlaArtwork.isActive ? 'page' : null"
            >
              Work
            </a>
          </li>
          <li>
            <a
              routerLink="/contact"
              routerLinkActive="active"
              #rlaContact="routerLinkActive"
              [attr.aria-current]="rlaContact.isActive ? 'page' : null"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}