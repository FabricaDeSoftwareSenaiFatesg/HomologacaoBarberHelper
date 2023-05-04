import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Pessoa } from 'src/app/arquitetura/modelo/pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.css']
})
export class PessoaListagemComponent extends BaseComponent<Pessoa> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: PessoaService) {

    super(changeDetectorRef, router, activatedRoute, service);

    super.ngOnInit();

  }

  pessoas: Pessoa[] = [];

  override ngOnInit(): void {

    this.listar();

  }

  protected override newEntidade(): Pessoa {

    return new Pessoa();

  }

  listar() {

    this.service.listar().subscribe(retorno => {

      this.pessoas = retorno;

    })

  }

}
