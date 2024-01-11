import { Component } from '@angular/core';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" routerLink="" src="/assets/logo.svg" alt="logo"/>
      <div class="brand-title">Animal CRUD</div>
    </header>

    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: [
    './app.component.css',
  ],
  imports: [AnimalListComponent, RouterModule],
})

export class AppComponent {
  title = 'default';

}
