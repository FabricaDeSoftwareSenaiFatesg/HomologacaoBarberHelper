package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Pedido;
import br.com.projeto.barberhelper.repository.PedidoDAO;
import br.com.projeto.barberhelper.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoServiceImpl extends ServiceGenerico<Long, Pedido> implements PedidoService {

    @Autowired
    private PedidoDAO dao;

    @Override
    public DAO<Long, Pedido> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Pedido entidade) {
    }

}
