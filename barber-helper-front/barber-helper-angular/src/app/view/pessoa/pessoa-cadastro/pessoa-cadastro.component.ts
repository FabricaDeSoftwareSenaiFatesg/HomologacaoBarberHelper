import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManutencaoComponent } from 'src/app/arquitetura/component/manutencao.component';
import { Pessoa } from 'src/app/arquitetura/modelo/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent extends ManutencaoComponent<Pessoa> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: PessoaService
    ) {
    super(changeDetectorRef, router, activatedRoute, service);
  }

  pessoa1: Pessoa = new Pessoa();

  override ngOnInit(): void {

    this.newEntidade();

  }

  protected override newEntidade(): Pessoa {
    return new Pessoa();
  }

  override salvar() {

    console.log(this.pessoa1);

    this.entidade = this.pessoa1;

    this.service.salvar(this.entidade);

  }

}
