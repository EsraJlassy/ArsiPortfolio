import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then(
        (m) => m.PublicLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
        data: { animation: 'Home' },
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./features/gallery/gallery.component').then(
            (m) => m.GalleryComponent
          ),
        data: { animation: 'Gallery' },
      },
      {
        path: 'artwork',
        loadComponent: () =>
          import('./features/artwork/artwork.component').then(
            (m) => m.ArtworkComponent
          ),
        data: { animation: 'Artwork' },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        data: { animation: 'Contact' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];