import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from 'src/app/arquitetura/component/base.component';
import {Usuario} from 'src/app/arquitetura/modelo/usuario.model';
import {UsuarioService} from '../usuario.service';
import {MessageService} from 'primeng/api';
import {TipoUsuarioEnum} from "../../../arquitetura/modelo/tipo-usuario.enum";

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css'],
  providers: [MessageService]
})
export class UsuarioListagemComponent extends BaseComponent<Usuario> implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: UsuarioService,
    protected override messageService: MessageService) {

    super(changeDetectorRef, router, activatedRoute, service, messageService);
    super.ngOnInit();
  }

  tiposUsuario: TipoUsuarioEnum[] = [];

  override ngOnInit(): void {
    super.listar();
    this.inicializarTiposUsuario();
  }

  protected override newEntidade(): Usuario {
    return new Usuario();
  }

  inicializarTiposUsuario() {
    this.tiposUsuario.push(TipoUsuarioEnum.CLIENTE, TipoUsuarioEnum.FUNCIONARIO, TipoUsuarioEnum.ADMINISTRADOR);
  }

  override salvar() {
    this.entidade = this.entidadeForm;
    super.salvar();
  }

}
