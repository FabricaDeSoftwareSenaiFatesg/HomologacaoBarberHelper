package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.repository.UsuarioDAO;
import br.com.projeto.barberhelper.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl extends ServiceGenerico<Long, Usuario> implements UsuarioService {

    @Autowired
    private UsuarioDAO dao;

    @Override
    public DAO<Long, Usuario> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Usuario entidade) {
    }

    @Override
    public Usuario autenticarUsuario(String login, String senha) {
        return null;
    }
}
