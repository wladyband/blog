import { MetamodelGifComponent } from './../blog/metamodel-gif/metamodel-gif.component';
import { Dicas1Component } from './../blog/dicas1/dicas1.component';
import { CurriculoComponent } from './../blog/curriculo/curriculo.component';
import { NotfoundComponent } from './../blog/notfound/notfound.component';
import { InicioComponent } from './../blog/inicio/inicio.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaginateGifComponent } from '../blog/paginate-gif/paginate-gif.component';







// revisar a aula 94, porém parei na aula 85 
const ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'curriculo', component: CurriculoComponent },
  { path: 'angular_node', component: Dicas1Component },
  { path: 'paginate', component: PaginateGifComponent },
  { path: 'metamodel', component: MetamodelGifComponent },
  

];


/*
,
      children: [
        { path: '', redirectTo: 'menu', pathMatch: 'full' },
        { path: 'menu', component: MenuComponent },
        { path: 'reviews', component: ReviewsComponent }
      ]},

      */


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
