package br.com.projeto.barberhelper.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tb_historico_pagamento")
public class HistoricoPagamento extends EntidadeGenerica {

    private Long pagamentoId;

    private LocalDate dataPagamento;

    @ManyToOne
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
    private Pessoa cliente;

}
