import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../arquitetura/component/base.component";
import {Dashboard} from "../../arquitetura/modelo/dashboard.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {DashboardService} from "./dashboard.service";
import {Produto} from "../../arquitetura/modelo/produto.model";
import {Servico} from "../../arquitetura/modelo/servico.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent extends BaseComponent<Dashboard> implements OnInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: DashboardService,
    protected override messageService: MessageService) {

    super(changeDetectorRef, router, activatedRoute, service, messageService);
    this.ngOnInit();
  }

  reservas: Servico[] = [];

  pedidos: Produto[] = [];

  basicData: any;
  basicOptions: any;
  data: any;
  options: any;

  override ngOnInit(): void {
    this.consultarValoresParaDashboard();
  }

  consultarValoresParaDashboard() {
    this.service.listarDashboardDTO().subscribe(retorno => {
      this.reservas = retorno.reservas;
      this.pedidos = retorno.pedidos;

      this.inicializarGraficoVendas();
      this.inicializarGraficoReservas();
    });
  }

  inicializarGraficoVendas(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: this.getDataDosPedidos(),
      datasets: [
        {
          label: 'Quantidade de Produtos',
          data: this.getDadosProdutos(),
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Quantidade de Produto por Pedido',
          font: {
            size: 18,
            family: 'Poppins',
            weight: 500
          }
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  getDataDosPedidos(): Date[]{
    let datas: Date[] = [];

    this.pedidos.forEach((pedido: any) => {
      datas.push(pedido.dataCadastro);
    })

    return datas;
  }

  getDadosProdutos(): number[]{
    let quantidadeProdutos: number[] = [];

    this.pedidos.forEach((pedido: any) => {
      pedido.produtos.forEach((produto: any) => {
        quantidadeProdutos.push(produto.quantidade);
      });
    });

    return quantidadeProdutos;
  }

  inicializarGraficoReservas(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.getDataDasReservas(),
      datasets: [
        {
          label: 'Quantidade de Serviços',
          data: this.getDadosReservas(),
          fill: true,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        title: {
          display: true,
          text: 'Quantidade de Serviço por Reserva',
          font: {
            size: 18,
            family: 'Poppins',
            weight: 500
          }
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }

  getDataDasReservas(): Date[]{
    let datas: Date[] = [];

    this.reservas.forEach((reserva: any) => {
      datas.push(reserva.dataCadastro);
    })

    return datas;
  }

  getDadosReservas(): number[] {
    let quantidadeServicos: number[] = [];

    this.reservas.forEach((reserva: any) => {
      quantidadeServicos.push(reserva.servicos.length);
    });

    return quantidadeServicos;
  }

  protected newEntidade(): Dashboard {
    return new Dashboard();
  }

}
