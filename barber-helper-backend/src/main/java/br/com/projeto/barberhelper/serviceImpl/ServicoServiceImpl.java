package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Servico;
import br.com.projeto.barberhelper.repository.ServicoDAO;
import br.com.projeto.barberhelper.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicoServiceImpl extends ServiceGenerico<Long, Servico> implements ServicoService {

    @Autowired
    private ServicoDAO dao;

    @Override
    public DAO<Long, Servico> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Servico entidade) {
    }

}
