import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../arquitetura/component/base.component";
import {Usuario} from "../../arquitetura/modelo/usuario.model";
import {ActivatedRoute, Router} from "@angular/router";
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../usuario/usuario.service';
import { HomeComponent } from '../home/home.component';

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

    if (this.usuarioLogin.email && this.usuarioLogin.senha) {

      this.service.autenticarUsuario(this.usuarioLogin).subscribe(retorno => {

        if (!retorno) {

          this.adicionarMensagemAlerta("Email e/ou senha incorretos");

        } else {

          this.router.navigate(['']);

        }

      });

    } else {

      this.adicionarMensagemAlerta("Preencha todos os campos!");

    }

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

    if (this.novoUsuario.email && this.novoUsuario.senha && this.novoUsuario.pessoa.nome && this.novoUsuario.pessoa.cpf && this.novoUsuario.pessoa.telefone) {

      if (this.validarEmail(this.novoUsuario.email)) {

        if (this.validarSenha(this.novoUsuario.senha)) {

          if (this.validarCpf(this.novoUsuario.pessoa.cpf)) {

            this.service.salvar(this.novoUsuario).subscribe(() => {

              this.router.navigate(['']);

            });

          } else {

            this.adicionarMensagemAlerta("CPF inválido");

          }

        } else {

          this.adicionarMensagemAlerta("Senha deve ter no mínimo 5 caracteres");

        }

      } else {

        this.adicionarMensagemAlerta("Email inválido");

      }

    } else {

      this.adicionarMensagemAlerta("Preencha todos os campos!");

    }

  }

  validarEmail(email: string) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

  validarSenha(senha: string) {
    if(senha.length > 5) return true;
    else return false;
  }

  validarCpf(cpf: string) {
    var soma;
    var resto;
    soma = 0;

    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replace("-", "");
    if (cpf == "00000000000") return false;

    for (var i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11))  resto = 0;
      if (resto != parseInt(cpf.substring(9, 10)) ) return false;

      soma = 0;
      for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11))  resto = 0;
      if (resto != parseInt(cpf.substring(10, 11) ) ) return false;
      return true;
  }

}
