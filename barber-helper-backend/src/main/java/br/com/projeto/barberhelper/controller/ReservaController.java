package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.dto.FidelidadeDTO;
import br.com.projeto.barberhelper.model.Reserva;
import br.com.projeto.barberhelper.service.ReservaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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

    @GetMapping(value = "/fidelidade/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<FidelidadeDTO> obterFidelidadeCliente(@PathVariable Long idCliente) {

        return ResponseEntity.ok().body(service.obterCountFidelidadeCliente(idCliente));

    }

}
