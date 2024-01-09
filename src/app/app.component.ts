import { Component } from '@angular/core';
import { AnimalListComponent } from './animal-list/animal-list.component';
@Component({
  selector: 'app-root',
  standalone:true,
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo"/>
      <div class="brand-title">Angular CRUD</div>
    </header>

    <section class="content">
      <app-animal-list >

      </app-animal-list>
    </section>
  </main>
  `,
  styleUrls: [
    './app.component.css',
  ],
  imports: [AnimalListComponent],
})

export class AppComponent {
  title = 'default';

}
