package br.com.projeto.barberhelper.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tb_produto")
public class Produto extends EntidadeGenerica {

    private BigDecimal valor;

    private String descricao;

    private Long tempo;

    @ManyToOne
    @JoinColumn(name = "id_imagem", referencedColumnName = "id")
    private Imagem imagem;

}
