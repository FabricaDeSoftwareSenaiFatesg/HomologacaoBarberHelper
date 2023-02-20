package br.com.projeto.barberhelper.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tb_servico")
public class Servico extends EntidadeGenerica {

    private BigDecimal valor;

    private String descricao;

    private Long tempo;

}
