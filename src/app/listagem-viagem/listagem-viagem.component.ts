import { ViagemService } from './../services/viagem.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent implements OnInit {


  viagens: Array<any> = [];

  constructor(private viagemService: ViagemService) { }

  listarViagens() {
    this.viagemService.listarTodas().subscribe(e => this.viagens = e);
  }

  ngOnInit() {
    return this.listarViagens()
  }


}
