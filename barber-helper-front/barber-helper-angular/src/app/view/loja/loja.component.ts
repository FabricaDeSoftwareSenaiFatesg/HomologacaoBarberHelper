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

    let produtoEncontrado = this.produtosSelecionados.find(p => p.descricao == produto.descricao);

    if (produtoEncontrado == undefined) {

      let produtoSelecionado = new Produto();

      produtoSelecionado.descricao = produto.descricao;

      produtoSelecionado.valor = produto.valor;

      produtoSelecionado.quantidade = 1;

      this.produtosSelecionados.push(produtoSelecionado);

    }

  }

  diminuirQtd(produto: Produto) {

    if (produto.quantidade > 1) {

      produto.quantidade = produto.quantidade - 1;

    } else {

      this.produtosSelecionados.splice(this.produtosSelecionados.indexOf(produto), 1);

    }

  }

  aumentarQtd(produto: Produto) {

    let produtoEncontrado = this.produtos.find(p => p.descricao == produto.descricao);

    if (produtoEncontrado !== undefined) {

      if (produtoEncontrado?.quantidade >= produto.quantidade + 1) {

        produto.quantidade = produto.quantidade + 1

      }

    }

  }

  somarTotal() {

    let total = 0;

    this.produtosSelecionados.forEach(produto => total = total + (produto.valor * produto.quantidade));

    return "R$" + total;

  }

  confirmarPedido() {

  }

}
