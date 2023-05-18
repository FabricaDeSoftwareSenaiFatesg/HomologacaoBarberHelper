import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Reserva } from 'src/app/arquitetura/modelo/reserva.model';
import { ReservaService } from './reserva.service';
import { Router, ActivatedRoute } from '@angular/router';
import {PessoaService} from "../pessoa/pessoa.service";
import {ServicoService} from "../servico/servico.service";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent extends BaseComponent<Reserva> implements OnInit{

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: ReservaService,
    protected pessoaService: PessoaService,
    protected servicoService: ServicoService) {

    super(changeDetectorRef, router, activatedRoute, service);

    this.ngOnInit();
  }

  data: Date = new Date();

  servicos: any = [];
  servicosSelecionados: any = [];

  profissionais: any = [];
  profissionalSelecionado: any = [];

  horarios: string[] = [];
  horarioSelecionado: string = '';

  override ngOnInit(): void {

    this.newEntidade();
    this.consultarServicos();
    this.consultarProfissionais();
  }

  protected override newEntidade(): Reserva {
    return new Reserva();
  }

  consultarHorarios() {
    let pesquisaHorarios = {
      servicos: this.servicosSelecionados,
      profissional: this.profissionalSelecionado,
      data: this.data
    };
    this.service.consultarHorarios(pesquisaHorarios).subscribe(response => {
      this.horarios = response.entity;
    });
  }

  consultarProfissionais() {
    this.pessoaService.listar().subscribe(response => {
      this.profissionais = response;
    });
  }

  consultarServicos() {
    this.servicoService.listar().subscribe(response => {
      this.servicos = response;
    })
  }
}
