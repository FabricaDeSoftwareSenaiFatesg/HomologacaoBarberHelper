import { ChangeDetectorRef, Component } from '@angular/core';
import { Entidade } from '../modelo/entidade.model';
import { BaseService } from '../service/base.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: ''
})
export abstract class BaseComponent<E extends Entidade> {

  entidade: E;

  constructor(
    protected changeDectetor: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: BaseService<E>,) {

  }

  preSalvar(entidade: E) {

  }

  preAlterar(entidade: E) {

  }

  salvar(form?: any) {

    if (form && form.valid) {

      if (!this.entidade.id) {

        this.preSalvar(this.entidade);

        this.service.salvar(this.entidade).subscribe(() => {

          this.executarDepoisDeSalvar();

          this.router.navigate(this.getVoltarCommand());

        });

      } else {

        this.preAlterar(this.entidade);

        this.service.alterar(this.entidade).subscribe(() => {

          this.executarDepoisDeSalvar();

          this.router.navigate(this.getVoltarCommand());
        });
      }

    } else {

    }

  }

  voltar() {

    this.router.navigate(this.getVoltarCommand());

  }

  getVoltarCommand(): any[] {

    return [this.getPath()];

  }

  getPath() {

    return this.service.path;

  }

  public executarDepoisDeSalvar():void {

  }

  protected abstract newEntidade(): E;

  acaoAposCarregarEntidade() {

  }

  ngOnInit() {

    this.inicializarManutencao();

  }

  ngAfterViewInit(): void {

  }

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

}
