import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '404' } // sempre que digitar uma rota errada ele cai na rota coringa que redireciona pra rota 404 que é a rota de erro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
