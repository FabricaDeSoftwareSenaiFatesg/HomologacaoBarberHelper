import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../arquitetura/component/base.component";
import {Usuario} from "../../arquitetura/modelo/usuario.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./login.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent<Usuario> implements OnInit{

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: LoginService,
    protected override messageService: MessageService) {

    super(changeDetectorRef, router, activatedRoute, service, messageService);

    super.ngOnInit();

  }

  override ngOnInit() : void {
    this.newEntidade()
  }

  protected override newEntidade(): Usuario {
    return new Usuario();
  }

  override preSalvar() {
    console.log(this.entidade);
  }

}
