import { Routes } from '@angular/router';
import { HomeComponent } from './pages/navegacao/home/home.component';
import { CalculoCdbComponent } from './pages/simulador/calculo-cdb/calculo-cdb.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [

  { path: '', redirectTo: '/calculo-cdb', pathMatch: 'full' },
  { path: 'contato', component: ContatoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calculo-cdb', component: CalculoCdbComponent },
  

];
