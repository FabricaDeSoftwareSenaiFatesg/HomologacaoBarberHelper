package br.com.projeto.barberhelper.model.dto;

import br.com.projeto.barberhelper.generic.DTO;
import br.com.projeto.barberhelper.model.Produto;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class ProdutoPagamentoDTO extends DTO {

    private List<Produto> produtos;

    private BigDecimal valorTotal;

    private String descricao;

    private Long codigo;

}
