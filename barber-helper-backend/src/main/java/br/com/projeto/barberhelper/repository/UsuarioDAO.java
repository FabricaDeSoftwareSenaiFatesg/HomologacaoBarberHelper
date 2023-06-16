package br.com.projeto.barberhelper.repository;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.model.Usuario;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioDAO extends DAO<Long, Usuario> {

    Usuario getUsuarioByPessoaCpf(String cpf);

    Usuario findByEmail(String username);

}
