package br.com.projeto.barberhelper.service;

import java.util.Date;
import java.util.List;

import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.dto.FidelidadeDTO;
import br.com.projeto.barberhelper.model.Reserva;

public interface ReservaService extends Service<Long, Reserva> {

    FidelidadeDTO obterCountFidelidadeCliente(Long id);

    List<Reserva> obterReservasDoFuncionarioPorData(Long funcionarioId, Date dataReserva);
}
