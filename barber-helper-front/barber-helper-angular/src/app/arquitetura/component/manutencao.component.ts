import {ActivatedRoute, Router} from "@angular/router";
import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import { Entidade } from "../modelo/entidade.model";
import { ManutencaoServico } from "../service/manutencao.service";

/**
 * Classe que representa o componente base de manutenção das entidades
 */
@Component({
  template: ''
})
export abstract class ManutencaoComponent<E extends Entidade> implements OnInit {

  @ViewChildren('inputForm') inputs: QueryList<any> | undefined;

  /**
   * Entidade que será mantida pelo componente
   */
  entidade: E;

  processando: boolean = false;

  /**
   * Configura se é para voltar para a tela de listagem após a persistência (create, update)
   */
  protected voltarAposPersistencia: boolean = true;

  constructor(
    protected changeDectetor: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: ManutencaoServico<E>,) {

  }

  /**
   * Método responsável por preparar entidade para salvar
   */
  preSalvar(entidade: E) {

  }

  /**
   * Método responsável por preparar entidade para alterar
   */
  preAlterar(entidade: E) {

  }

  /**
   * Método responsável por salvar ou alterar uma determinada entidade
   */
  salvar(form?: any) {

    if (form && form.valid) {

      this.processando = true;

      if (!this.entidade.id) {

        this.preSalvar(this.entidade);

        this.service.salvar(this.entidade).subscribe((retorno: any) => {

          this.executarDepoisDeSalvar();

          this.router.navigate(this.getVoltarCommand());
        });

      } else {

        this.preAlterar(this.entidade);

        this.service.alterar(this.entidade).subscribe((retorno: any) => {

          this.executarDepoisDeSalvar();

          this.router.navigate(this.getVoltarCommand());
        });
      }

    } else {

    }
  }

  /**
   * Voltar para a tela de listagem
   */
  voltar() {

    this.router.navigate(this.getVoltarCommand());

  }

  /**
   * Método responsável por criar uma nova entidade com o tipo parametrizado
   */
  protected abstract newEntidade(): E;

  /**
   * Método responsável por inicializar a manutenção
   */
  protected inicializarManutencao() {

    let id: number = this.activatedRoute.snapshot.params['id'];

    if (id) {

      this.service.get(id).subscribe((entidade) => {

        this.entidade = entidade;

        this['acaoAposCarregarEntidade'] && this['acaoAposCarregarEntidade']();

      });

    } else {

      this.entidade = this.newEntidade();

    }

  }

  acaoAposCarregarEntidade() {

  }

  /**
   * Inicialização do componente
   */
  ngOnInit() {

    this.inicializarManutencao();

  }

  ngAfterViewInit(): void {

  }

  getPath() {

    return this.service.path;

  }

  /**
   * Método responsável por obter os commands para voltar para tela de listagem
   */
  getVoltarCommand(): any[] {

    return [this.getPath()];

  }

  /**
   * Método responsável por retornar os commands para abertura da tela de consulta
   */
  getConsultaCommand(): any[] {

    return [this.getPath()];

  }

  /**
   * Método responsável por retornar os commands para abertura da tela de cadastro
   */
  getCadastroCommand(entidade?: E): any[] {

    if (entidade) {

      return [this.getPath() + '/edicao/', entidade.id];

    } else {

      return [this.getPath() + '/novo'];
    }

  }

  public executarDepoisDeSalvar():void{}

}
