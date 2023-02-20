package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "usuario")
public class UsuarioController extends ManutencaoController<Usuario> {

    private static final long serialVersionUID = 1L;

    @Autowired
    private UsuarioService service;

    @Override
    protected Service<Long, Usuario> getServico() {
        return service;
    }

}
