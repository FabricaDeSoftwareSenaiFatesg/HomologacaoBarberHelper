package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.dto.FidelidadeDTO;
import br.com.projeto.barberhelper.model.Reserva;
import br.com.projeto.barberhelper.model.enuns.StatusReservaEnum;
import br.com.projeto.barberhelper.repository.ReservaDAO;
import br.com.projeto.barberhelper.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

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

}
