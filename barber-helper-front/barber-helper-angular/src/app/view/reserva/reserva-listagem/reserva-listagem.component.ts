import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {BaseComponent} from "../../../arquitetura/component/base.component";
import {Reserva} from "../../../arquitetura/modelo/reserva.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservaService} from "../reserva.service";
import {PessoaService} from "../../pessoa/pessoa.service";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-reserva-listagem',
  templateUrl: './reserva-listagem.component.html',
  styleUrls: ['./reserva-listagem.component.css']
})
export class ReservaListagemComponent extends BaseComponent<Reserva> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: ReservaService,
    protected pessoaService: PessoaService,
    protected override messageService: MessageService) {

    super(changeDetectorRef, router, activatedRoute, service, messageService);

    super.ngOnInit();

  }

  override listaEntidades: any[] = [];
  modalFiltro: boolean = false;

  reservas: Reserva[] = [];
  data: any[] = [];

  profissionais: any = [];
  profissionalSelecionado: any = [];

  override ngOnInit(): void {
    this.consultarProfissionais();
    this.listarFiltrado();
  }

  protected override newEntidade(): Reserva {
    return new Reserva();
  }

  consultarProfissionais() {
    this.pessoaService.listar().subscribe(response => {
      this.profissionais = response;
    });
  }

  filtrar() {
    this.modalFiltro = true;
  }

  listarFiltrado() {
    let pesquisaHorarios = {
      profissional: Array.isArray(this.profissionalSelecionado) ? this.service.getUsuarioLogado() : this.profissionalSelecionado,
      data: Array.isArray(this.data) ? new Date(): this.data
    };

    this.service.listarFiltrado(pesquisaHorarios).subscribe(response => {
      this.listaEntidades = response.entity;
    });
  }

}
