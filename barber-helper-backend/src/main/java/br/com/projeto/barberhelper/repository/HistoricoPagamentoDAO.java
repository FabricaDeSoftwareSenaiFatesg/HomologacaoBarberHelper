package br.com.projeto.barberhelper.repository;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.model.HistoricoPagamento;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoPagamentoDAO extends DAO<Long, HistoricoPagamento> {
}
