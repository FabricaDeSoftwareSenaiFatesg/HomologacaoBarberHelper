package br.com.projeto.barberhelper.security;

import br.com.projeto.barberhelper.generic.BaseController;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.model.dto.UsuarioControllerDTO;
import br.com.projeto.barberhelper.repository.AuthTokenDAO;
import br.com.projeto.barberhelper.service.UsuarioService;
import br.com.projeto.barberhelper.utils.MapBuilder;
import br.com.projeto.barberhelper.utils.MessageSupport;
import br.com.projeto.barberhelper.utils.NullUtil;
import br.com.projeto.barberhelper.utils.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.GET;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.UUID;

@PermitAll
@Component
@Path("auth")
public class AuthController extends BaseController {

    private static final long serialVersionUID = -2448355600970397820L;

    private static final String REQUEST_PARAMETER_PASSWORD = "password";

    protected static final String REQUEST_PARAMETER_USERNAME = "username";

    private Logger logger = LoggerFactory.getLogger(AuthController.class.getName());

    @Autowired
    private ContextoManager contextoManager;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private AuthTokenDAO authTokenDAO;

    @POST
    public Response auth() {

        final String usuario = request.getParameter( REQUEST_PARAMETER_USERNAME );

        final String senha = request.getParameter( REQUEST_PARAMETER_PASSWORD );

        final Usuario usuarioLogado = this.processLogin(usuario, senha);

        final String token = Base64.getEncoder().encodeToString(String.format("%s:%s", usuario, UUID.randomUUID().toString()).getBytes());

        this.registrarToken(usuarioLogado, token);

        return this.createResponseAuth(token, usuarioLogado);
    }

    @GET
    @Path("logout")
    public Response logout() {

        if (this.request.getHeader(BaseController.AUTHORIZATION_PROPERTY) != null) {

            this.processLogout(this.request.getHeader(BaseController.AUTHORIZATION_PROPERTY));
        }

        return Response.noContent().build();
    }

    protected Usuario processLogin(String login, String senha) throws NotAuthorizedException {

        if (NullUtil.isNullOrEmpty(login) || NullUtil.isNullOrEmpty(senha)) {

            throw new ServiceException(MessageSupport.getMessage("Campos obrigatórios não preenchidos"));

        }

        final Usuario usuario = usuarioService.autenticarUsuario(login, senha);

        if (usuario == null) {

            throw new ServiceException(MessageSupport.getMessage("Usuario ou senha incorretos"));
        }

        return usuario;

    }

    protected Response createResponseAuth(String token, Usuario usuario) {

        final Response response = Response.ok(MapBuilder.create("token", token)

                .map("usuario", new UsuarioControllerDTO(usuario))

                .build(), MediaType.APPLICATION_JSON).build();

        return response;
    }

    protected void processLogout(String token) {

        this.contextoManager.remover(token);

        this.processarLogoutNovoFormato(token);

    }

    private void processarLogoutNovoFormato(final String token) {

        try {

            final AuthToken authToken = this.authTokenDAO.findFirstByToken(token);

            this.authTokenDAO.delete(authToken);

            logger.info(String.format("Token %s removido com sucesso da tabela.", token));

        } catch (final Exception e) {

            logger.error("Ocorreu um erro ao remover o token da tabela.", e);

        }

    }

    protected void registrarToken(Usuario usuarioEndpoint, String token) {

        this.contextoManager.armazenar(token, usuarioEndpoint);

        this.registrarTokenNovoFormato(usuarioEndpoint, token);

    }

    private void registrarTokenNovoFormato(final Usuario usuarioEndpoint, final String token) {

        try {

            if (!this.authTokenDAO.existsByToken(token)) {

                final AuthToken authToken = new AuthToken();

                authToken.setDataAutenticacao(LocalDateTime.now());

                authToken.setToken(token);

                authToken.setIdUsuario(usuarioEndpoint.getId());

                this.authTokenDAO.save(authToken);

                logger.info(String.format("Token %s registrado com sucesso na tabela.", token));

            }

        } catch (final Exception e) {

            logger.error("Ocorreu um erro ao registrar o token na tabela.", e);

        }

    }

}
