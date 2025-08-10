import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="project-card">
      <img [src]="image" alt="project image">
      <div class="meta">
        <h4>{{title}}</h4>
        <p class="desc">{{desc}}</p>
      </div>
    </article>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() image = '';
}