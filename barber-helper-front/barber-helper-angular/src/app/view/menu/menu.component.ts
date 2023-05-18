import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
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
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
