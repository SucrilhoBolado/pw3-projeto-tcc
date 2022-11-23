import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'cadastro-viagens', component: CadastroViagemComponent},
  {path:'listagem-viagens', component: ListagemViagemComponent},
  {path:'detalhes-viagem', component: DetalhesViagemComponent},
  {path:'exclusao-viagem', component: ExclusaoViagemComponent},
  {path:'', component: ListagemViagemComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
