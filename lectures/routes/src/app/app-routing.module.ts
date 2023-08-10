import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageHomeComponent, pathMatch: 'full' }, // patchMatch sempre full quando a rota estiver vazia, pra evitar renderização a mais

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
