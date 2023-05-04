import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent extends BaseComponent<Usuario> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: UsuarioService) {

    super(changeDetectorRef, router, activatedRoute, service);

    super.ngOnInit();

  }

  pessoas: Usuario[] = [];

  override ngOnInit(): void {

  }

  protected override newEntidade(): Usuario {

    return new Usuario();

  }

}
