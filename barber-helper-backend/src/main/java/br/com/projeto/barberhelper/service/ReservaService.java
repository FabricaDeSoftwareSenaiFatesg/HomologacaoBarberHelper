package br.com.projeto.barberhelper.service;

import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.dto.FidelidadeDTO;
import br.com.projeto.barberhelper.model.Reserva;

public interface ReservaService extends Service<Long, Reserva> {

    FidelidadeDTO obterCountFidelidadeCliente(Long id);

}
