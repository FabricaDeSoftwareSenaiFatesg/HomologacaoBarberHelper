package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.generic.ManutencaoController;
import br.com.projeto.barberhelper.generic.Service;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @PostMapping()
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void salvar(@RequestBody Usuario usuario) throws Exception {

        if (!this.service.dadosValidos(usuario)){
            throw new Exception("Já existe um usuário com essas informações");
        }

        super.salvar(usuario);
    }

    @GetMapping(value = "/get-usuario-logado")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario getUsuarioLogado() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String login = (String) authentication.getPrincipal();
        return this.service.getUsuarioPeloLogin(login);
    }

    @GetMapping(value = "/logout")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void logout() {

        this.service.logout();

    }

}
