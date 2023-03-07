package br.com.projeto.barberhelper.model.dto;

import br.com.projeto.barberhelper.generic.DTO;
import br.com.projeto.barberhelper.model.Pessoa;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ClientePagamentoDTO extends DTO {

    private Pessoa cliente;

    private BigDecimal valorPagamento;

    private String cep;

    private String rua;

    private String estado;

    private String cidade;

    private String numEndereco;

}
