import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="socials">
        <div class="icons">
          <a href="jlassyesra6@email.com" target="_blank" rel="noopener">
            <img src="assets/images/emails.png" alt="Email" class="icon" />
          </a>
          <a href="https://www.linkedin.com/in/jlassi-isra/" target="_blank" rel="noopener">
            <img src="assets/images/linkdin.png" alt="LinkedIn" class="icon" />
          </a>
          <a href="https://www.behance.net/yourusername" target="_blank" rel="noopener">
            <img src="assets/images/Behances.png" alt=  "Behance" class="icon" />
          </a>
          <a href="https://www.instagram.com/jlassy_esra/" target="_blank" rel="noopener">
            <img src="assets/images/instagram.png" alt="Instagram" class="icon" />
          </a>

        </div>
          <a class="kofi">Support Me on Arsi</a>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}