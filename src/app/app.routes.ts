import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.components';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
export const routes: Routes = [


// Aquí van las rutas de la aplicación, se controla
//ejemplo: si estamos en la ruta /home, se carga el componente HomeComponent
// se puede agregar tantas rutas como se necesiten
//si estamos en la ruta/404, se carga el componente NotFoundComponent

  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }

];
