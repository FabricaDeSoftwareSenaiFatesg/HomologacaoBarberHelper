package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Reserva;
import br.com.projeto.barberhelper.repository.ReservaDAO;
import br.com.projeto.barberhelper.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
