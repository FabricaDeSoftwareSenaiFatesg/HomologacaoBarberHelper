package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Produto;
import br.com.projeto.barberhelper.repository.ProdutoDAO;
import br.com.projeto.barberhelper.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServiceImpl extends ServiceGenerico<Long, Produto> implements ProdutoService {

    @Autowired
    private ProdutoDAO dao;

    @Override
    public DAO<Long, Produto> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Produto entidade) {
    }

}
