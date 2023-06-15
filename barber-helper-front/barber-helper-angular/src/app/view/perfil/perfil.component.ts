import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';
import { TipoUsuarioEnum } from 'src/app/arquitetura/modelo/tipo-usuario.enum';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: UsuarioService
  ) {}

  usuarioLogado: Usuario;

  ngOnInit() {

    this.pegarUsuarioLogado();

  }

  pegarUsuarioLogado() {

    this.service.getUsuarioLogado().subscribe(retorno => {

      this.usuarioLogado = retorno;

    });

  }

}
