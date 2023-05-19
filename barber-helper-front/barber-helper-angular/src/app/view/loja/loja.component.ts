import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from 'src/app/arquitetura/modelo/produto.model';
import { Pedido } from 'src/app/arquitetura/modelo/pedido.model';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent extends BaseComponent<Pedido> implements OnInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: PedidoService,
    protected produtoService: ProdutoService) {

    super(changeDetectorRef, router, activatedRoute, service);

    this.ngOnInit();

  }

  produtos: Produto[] = [];

  layout: string = 'grid';

  descricaoBusca: string;

  carrinhoCompras: boolean = false;

  produtosSelecionados: Produto[] = [];

  override ngOnInit(): void {

    this.listar();

  }

  protected override newEntidade(): Pedido {

    return new Pedido();

  }

  override listar() {

    this.produtoService.listarProdutosDTO().subscribe(retorno => {

      this.produtos = retorno;

      this.changeDetectorRef.detectChanges();

    });

  }

  obterConteudoFormatado(produto: Produto) {

    if (produto.imagem.conteudo.indexOf('base64,') > -1) {

      return produto.imagem.conteudo;

    } else {

      return 'data:' + produto.imagem.tipo + ';base64,' + produto.imagem.conteudo;

    }

  }

  pesquisar() {

    console.log(this.descricaoBusca);

  }

  adicionarProdutoCarrinho(produto: Produto) {

    produto.quantidade = 1;

    this.produtosSelecionados.push(produto);

  }

}
