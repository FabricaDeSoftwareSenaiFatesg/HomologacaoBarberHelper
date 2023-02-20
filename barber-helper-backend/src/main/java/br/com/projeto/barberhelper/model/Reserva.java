package br.com.projeto.barberhelper.model;

import br.com.projeto.barberhelper.model.enuns.StatusReservaEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tb_reserva")
public class Reserva extends EntidadeGenerica {

    @ManyToOne
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
    private Pessoa cliente;

    @ManyToOne
    @JoinColumn(name = "id_funcionario", referencedColumnName = "id")
    private Pessoa funcionario;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany
    @JoinTable(name = "tb_reserva_servico", joinColumns = {@JoinColumn(name = "id_reserva")}, inverseJoinColumns = {@JoinColumn(name = "id_servico")})
    private List<Servico> servicos;

    private BigDecimal total;

    private LocalDateTime dataInicial;

    private LocalDateTime dataFim;

    private StatusReservaEnum statusReserva = StatusReservaEnum.RESERVADO;

}
