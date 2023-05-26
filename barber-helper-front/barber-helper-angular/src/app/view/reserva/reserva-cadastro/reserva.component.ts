import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from 'src/app/arquitetura/component/base.component';
import {Reserva} from 'src/app/arquitetura/modelo/reserva.model';
import {ReservaService} from '../reserva.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from "../../pessoa/pessoa.service";
import {ServicoService} from "../../servico/servico.service";
import {StatusReservaEnum} from "../../../arquitetura/modelo/status-reserva.enum";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaCadastroComponent extends BaseComponent<Reserva> implements OnInit{

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

  salvarReserva() {
    let reserva = {
      funcionario: this.profissionalSelecionado,
      servicos: this.servicosSelecionados,
      dataInicial: this.getDataInicial(),
      dataFim: this.getDataFim(this.getDataInicial()),
      statusReserva: StatusReservaEnum.RESERVADO,
    }
    this.service.salvarReserva(reserva).subscribe();
  }

  getDataInicial() {
    let dataInicial = new Date();
    let horaInicial = Number(this.horarioSelecionado.substring(0, 2));
    let minutoInicial = Number(this.horarioSelecionado.substring(3, 5));
    dataInicial.setHours(horaInicial, minutoInicial, 0, 0);
    return dataInicial;
  }

  getDataFim(dataInicial: Date) {
    let tempoTotalServicos = this.getTempoTotalServicos();
    let qntHorariosNecessarios = Math.ceil(tempoTotalServicos/30);
    let horasFinais = Math.floor(qntHorariosNecessarios * 30 / 60);
    let minutosFinais = qntHorariosNecessarios * 30 % 60;
    let dataFinal = new Date();
    dataFinal.setHours(dataInicial.getHours() + horasFinais, dataInicial.getMinutes() + minutosFinais, 0, 0);
    return dataFinal;
  }

  getTempoTotalServicos() {
    let tempoTotalServicos = 0;
    this.servicosSelecionados.forEach((servico: { tempo: number; }) => {
      tempoTotalServicos += servico.tempo;
    });
    return tempoTotalServicos;
  }
}
