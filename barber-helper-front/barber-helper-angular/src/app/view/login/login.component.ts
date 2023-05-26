import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../arquitetura/component/base.component";
import {Usuario} from "../../arquitetura/modelo/usuario.model";
import {ActivatedRoute, Router} from "@angular/router";
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent extends BaseComponent<Usuario> implements OnInit{

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: UsuarioService,
    protected override messageService: MessageService) {

    super(changeDetectorRef, router, activatedRoute, service, messageService);

    this.ngOnInit();

  }

  flagNovoUsuario: boolean = false;

  flagRecuperarSenha: boolean = false;

  usuarioLogin: Usuario = new Usuario();

  novoUsuario: Usuario = new Usuario();

  usuarioRecuperarSenha: Usuario = new Usuario();

  override ngOnInit() : void {
    this.newEntidade()
  }

  protected override newEntidade(): Usuario {
    return new Usuario();
  }

  login() {

    this.service.autenticarUsuario(this.usuarioLogin).subscribe(() => {});

  }

  recuperarSenha() {

    this.flagRecuperarSenha = true;

  }

  cadastrarUsuario() {

    this.flagNovoUsuario = true;

  }

  voltarLogin() {

    this.flagNovoUsuario = false;

    this.flagRecuperarSenha = false;

  }

  enviarEmailComSenhaNova() {

    console.log(this.usuarioRecuperarSenha);

  }

  cadastrarNovoUsuario() {

    this.service.salvar(this.novoUsuario).subscribe(() => {});

  }

}
