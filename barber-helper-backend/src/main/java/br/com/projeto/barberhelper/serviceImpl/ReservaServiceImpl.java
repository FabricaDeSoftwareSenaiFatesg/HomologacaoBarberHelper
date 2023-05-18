package br.com.projeto.barberhelper.serviceImpl;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import javax.persistence.Tuple;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Pessoa;
import br.com.projeto.barberhelper.model.Reserva;
import br.com.projeto.barberhelper.model.dto.FidelidadeDTO;
import br.com.projeto.barberhelper.model.enuns.StatusReservaEnum;
import br.com.projeto.barberhelper.repository.ReservaDAO;
import br.com.projeto.barberhelper.service.ReservaService;
import br.com.projeto.barberhelper.utils.DateUtil;

@Service
public class ReservaServiceImpl extends ServiceGenerico<Long, Reserva> implements ReservaService {

    @Autowired
    private ReservaDAO dao;

    @Override
    public DAO<Long, Reserva> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Reserva entidade) {
    }

    @Override
    public FidelidadeDTO obterCountFidelidadeCliente(Long id) {

        final CriteriaBuilder builder = em.getCriteriaBuilder();

        final CriteriaQuery<Tuple> query = builder.createTupleQuery();

        final Root<Reserva> root = query.from(Reserva.class);

        query.select(builder.tuple(

                root.get("id").alias("id")));

        query.where(builder.equal(root.get("cliente"), id),
                builder.equal(root.get("statusReserva"), StatusReservaEnum.FINALIZADO));

        FidelidadeDTO fidelidadeDTO = new FidelidadeDTO();

        fidelidadeDTO.setIdCliente(id);

        fidelidadeDTO.setCountReservas((int) this.executeQueryAndTransforResult(query, Reserva.class).stream().count());

        return fidelidadeDTO;

    }

    @Override
    public List<Reserva> obterReservasDoFuncionarioPorData(Long funcionarioId, Date dataReserva) {
        final CriteriaBuilder builder = em.getCriteriaBuilder();
        final CriteriaQuery<Tuple> query = builder.createTupleQuery();
        final Root<Reserva> root = query.from(Reserva.class);
        final Join<Reserva, Pessoa> rootFuncionario = root.join("funcionario");

        query.select(builder.tuple(
                root.get("dataInicial").alias("dataInicial"),
                root.get("dataFim").alias("dataFim")
        ));

        LocalDateTime dataInicial = DateUtil.getLocalDateTime(DateUtil.converterDateInicioDia(dataReserva));
        LocalDateTime dataFinal = DateUtil.getLocalDateTime(DateUtil.converterDateFimDia(dataReserva));

        query.where(
                builder.equal(rootFuncionario.get("id"), funcionarioId),
                builder.between(root.get("dataInicial"), dataInicial, dataFinal)
        );

        List<Reserva> reservas = this.executeQueryAndTransforResult(query, Reserva.class);
        return reservas;
    }

}
