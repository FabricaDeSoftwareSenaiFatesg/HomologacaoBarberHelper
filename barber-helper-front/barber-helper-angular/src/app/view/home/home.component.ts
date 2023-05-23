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

  ngOnInit() {

  }

}
