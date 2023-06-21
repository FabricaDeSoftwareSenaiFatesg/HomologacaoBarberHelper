import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';
import { TipoUsuarioEnum } from 'src/app/arquitetura/modelo/tipo-usuario.enum';
import { ReservaService } from '../reserva/reserva.service';
import { PerfilDTO } from 'src/app/arquitetura/modelo/perfilDTO.model';

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
    protected usuarioService: UsuarioService,
    protected reservaService: ReservaService
  ) {}

  usuarioLogado: Usuario;

  perfilUsuario: PerfilDTO;

  ngOnInit() {

    this.pegarDadosUsuario();

  }

  pegarDadosUsuario() {

    this.usuarioService.getUsuarioLogado().subscribe(retorno => {

      this.usuarioLogado = retorno;

      this.reservaService.consultarDadosPerfil(3).subscribe(retorno => {//this.usuarioLogado.pessoa.id

        console.log(retorno);

        this.perfilUsuario = retorno;

      });

    });

  }

}
