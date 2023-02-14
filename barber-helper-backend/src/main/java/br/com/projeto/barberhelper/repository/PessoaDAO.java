package br.com.projeto.barberhelper.repository;

import br.com.projeto.barberhelper.model.Pessoa;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaDAO extends DAO<Long, Pessoa> {
}
