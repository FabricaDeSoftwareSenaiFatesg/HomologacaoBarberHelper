import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: UsuarioService
  ) {}

  itemsFuncionario: MenuItem[];
  itemsMenuSanduiche: MenuItem[];
  itemsCliente: MenuItem[];

  usuarioLogado: Usuario | undefined;

  ngOnInit() {

    this.pegarUsuarioLogado();

    this.itemsFuncionario = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-line',
        command:(click)=>{this.router.navigate(['dashboard']);}
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        command:(click)=>{this.router.navigate(['reserva']);}
      },
      {
          label: 'Cadastros',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {
                  label: 'Pessoas',
                  icon: 'pi pi-fw pi-users',
                  command:(click)=>{this.router.navigate(['pessoa']);}
              },
              {
                  label: 'Serviços',
                  icon: 'pi pi-fw pi-wrench',
                  command:(click)=>{this.router.navigate(['servico']);}
              },
              {
                  label: 'Usuarios',
                  icon: 'pi pi-fw pi-user',
                  command:(click)=>{this.router.navigate(['usuario']);}
              },
              {
                label: 'Promoções',
                icon: 'pi pi-fw pi-percentage',
                command:(click)=>{this.router.navigate(['promocao']);}
              },
              {
                label: 'Produtos',
                icon: 'pi pi-fw pi-box',
                command:(click)=>{this.router.navigate(['produto']);}
              }
          ]
      },
      {
          separator: true
      },
      {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off',
          command:(click)=>{this.deslogar()}

      }
    ];

    this.itemsMenuSanduiche = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command:(click)=>{this.router.navigate(['']);}
      },
      {
        label: 'Sobre',
        icon: 'pi pi-info-circle',
        command:(click)=>{this.router.navigate(['sobre']);}
      },
      {
        label: 'Serviços',
        icon: 'pi pi-briefcase',
        command:(click)=>{this.router.navigate(['']);}
      },
      {
        label: 'Loja',
        icon: 'pi pi-shopping-cart',
        command:(click)=>{this.router.navigate(['loja']);}
      },
      {
        label: 'Agendar',
        icon: 'pi pi-calendar-times',
        command:(click)=>{this.router.navigate(['reserva']);}
      },
    ];

    this.itemsCliente = [
      {
        label: 'Perfil',
        icon: 'pi pi-fw pi-calendar',
        command:(click)=>{this.router.navigate(['']);}
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        command:(click)=>{this.router.navigate(['reserva']);}
      },
      {
        label: 'Pedidos',
        icon: 'pi pi-fw pi-calendar',
        command:(click)=>{this.router.navigate(['']);}
      },
      {
        separator: true
      },
      {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off',
          command:(click)=>{this.deslogar()}

      }
    ];

  }

  pegarUsuarioLogado() {

    this.service.getUsuarioLogado().subscribe(retorno => {

      this.usuarioLogado = retorno;

    });

  }

  deslogar() {

    this.usuarioLogado = undefined;

    this.service.sair().subscribe();

  }

  usuarioFuncionario(): MenuItem[] {

    return this.usuarioLogado?.tipo.toString() == 'CLIENTE' ? this.itemsCliente : this.itemsFuncionario;

  }

}
