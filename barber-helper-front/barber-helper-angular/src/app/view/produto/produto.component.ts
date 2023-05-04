import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Produto } from 'src/app/arquitetura/modelo/produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent extends BaseComponent<Produto> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: ProdutoService) {

    super(changeDetectorRef, router, activatedRoute, service);

    super.ngOnInit();

  }

  produtos: Produto[] = [];

  cadastro: boolean;

  override ngOnInit(): void {

    this.listar();

  }

  protected override newEntidade(): Produto {

    return new Produto();

  }

  listar() {

    this.service.listar().subscribe(retorno => {

      this.produtos = retorno;

    })

  }

  showDialog() {

    this.cadastro = true;

  }

  obterConteudoFormatado() {

    if (this.entidade.imagem.conteudo.indexOf('base64,') > -1) {

        return this.entidade.imagem.conteudo;

    } else {

        return 'data:' + this.entidade.imagem.tipo + ';base64,' + this.entidade.imagem.conteudo;

    }

}

}
