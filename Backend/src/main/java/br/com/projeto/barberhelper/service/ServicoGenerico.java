package br.com.projeto.barberhelper.service;

import br.com.projeto.barberhelper.model.EntidadeGenerica;

import java.io.Serializable;

public abstract class ServicoGenerico <ID extends Serializable, E extends EntidadeGenerica> implements Servico<ID, E> {
}
