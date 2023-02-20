package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.Reserva;
import br.com.projeto.barberhelper.service.ReservaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "reserva")
public class ReservaController extends ManutencaoController<Reserva> {

    private static final long serialVersionUID = 1L;

    @Autowired
    private ReservaService service;

    @Override
    protected Service<Long, Reserva> getServico() {
        return service;
    }

}
