package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.Servico;
import br.com.projeto.barberhelper.service.ServicoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "servico")
public class ServicoController extends ManutencaoController<Servico> {

    private static final long serialVersionUID = 1L;

    @Autowired
    private ServicoService service;

    @Override
    protected Service<Long, Servico> getServico() {
        return service;
    }

}
