import { Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { DetailedAnimalComponent } from './detailed-animal/detailed-animal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';

export const routes: Routes = [
  {
    path: '',
    component: AnimalListComponent,
    title: 'Home Page',
  },
  {
    path: 'preview/:id',
    component: DetailedAnimalComponent,
    title: 'Detailed Animal',
  },
  {
    path: 'preview/:id/edit',
    component: EditAnimalComponent,
    title: 'Edit Animal',
  },
  {
    path:'**',
    pathMatch:'full',
    component:PageNotFoundComponent,
  }
];
