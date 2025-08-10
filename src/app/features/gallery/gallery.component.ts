import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ProjectsService } from '../../core/services/projects.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  categories = ['all','branding','ux/ui','editorial','misc'];
  selected = 'all';
  projects:any = [];
  constructor(private svc: ProjectsService){ 
    this.projects = svc.getProjects()
  }
  select(cat:string){ this.selected = cat; this.projects = this.svc.getByCategory(cat) }
}