import { Injectable } from '@angular/core';

export interface Project { id:number; title:string; desc:string; image:string; category:string }

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [
    { id:1, title:'Logofolio', desc:'Featured collection of some of my branding projects.', image:'/assets/images/logofolio.png', category:'branding' },
    { id:2, title:'Editorial Spread', desc:'Editorial layouts and mockups', image:'/assets/images/editorial.png', category:'editorial' }
  ];

  getProjects(){ return this.projects }
  getByCategory(cat:string){ if(cat==='all') return this.projects; return this.projects.filter(p=>p.category===cat) }
}