package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.model.Pessoa;
import br.com.projeto.barberhelper.service.PessoaService;
import br.com.projeto.barberhelper.generic.Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "pessoa")
public class PessoaController extends ManutencaoController<Pessoa> {

    private static final long serialVersionUID = 1L;

    @Autowired
    private PessoaService pessoaService;

    @Override
    protected Service<Long, Pessoa> getServico() {
        return pessoaService;
    }

}
