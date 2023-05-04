import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {}

  value: string;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
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
          icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}
