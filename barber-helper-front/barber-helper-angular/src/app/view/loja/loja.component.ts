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

  layout: string = 'list';

  ngOnInit(): void {

    this.listar();

  }

  listar() {

    this.service.listarProdutosDTO().subscribe(retorno => {

      this.produtos = retorno;

      this.changeDetectorRef.detectChanges();

    });

  }

}
