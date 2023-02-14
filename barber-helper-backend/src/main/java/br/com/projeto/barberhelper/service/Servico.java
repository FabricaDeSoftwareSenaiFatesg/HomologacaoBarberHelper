package br.com.projeto.barberhelper.service;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import br.com.projeto.barberhelper.model.dto.DTO;
import br.com.projeto.barberhelper.repository.DAO;
import org.springframework.data.jpa.domain.Specification;

public interface Servico<ID extends Serializable, E extends Serializable> {

    E get(ID id);

    List<E> get(Collection<ID> ids);

    <D extends DTO> D getDTO(ID id) throws Exception;

    E salvar(E entidade);

    void salvar(Collection<E> lista);

    void alterarStatus(E entidade);

    void validarInativacao(E entidade);

    void excluir(E entidade);

    void excluirPorId(ID id);

    List<E> listar();

    Collection<?> listarDTO();

    Collection<?> listarDTOAtivos();

    List<E> listarAtivos();

    Long count();

    DAO<ID, E> getDAO();

    Class<? extends DTO> getDTOListagem();

    Class<? extends DTO> getDTOVisualizacao();

}