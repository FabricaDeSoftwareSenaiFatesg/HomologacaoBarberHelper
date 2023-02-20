package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.model.Pessoa;
import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.repository.PessoaDAO;
import br.com.projeto.barberhelper.service.PessoaService;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaServiceImpl extends ServiceGenerico<Long, Pessoa> implements PessoaService {

    @Autowired
    private PessoaDAO dao;

    @Override
    public DAO<Long, Pessoa> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Pessoa entidade) {
    }

}
