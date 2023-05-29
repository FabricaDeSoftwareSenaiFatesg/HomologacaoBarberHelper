package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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

    @GetMapping(value = "/get-usuario-logado")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario getUsuarioLogado() {

        return this.service.getUsuarioLogado();

    }

    @GetMapping(value = "/logout")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void logout() {

        this.service.logout();

    }

    @PostMapping(value = "/autenticar-usuario")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public boolean autenticarUsuario(@RequestBody Usuario entidade) {

        return this.service.autenticarUsuario(entidade.getEmail(), entidade.getSenha());

    }

}
