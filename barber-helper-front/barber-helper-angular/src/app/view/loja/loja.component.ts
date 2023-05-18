import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from 'src/app/arquitetura/modelo/produto.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: ProdutoService) {

    this.ngOnInit();

  }

  produtos: Produto[] = [];

  layout: string = 'grid';

  descricaoBusca: string;

  carrinhoCompras: boolean = false;

  produtosSelecionados: Produto[] = [];

  ngOnInit(): void {

    this.listar();

  }

  listar() {

    this.service.listarProdutosDTO().subscribe(retorno => {

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

    this.produtosSelecionados.push(produto);

  }

}
