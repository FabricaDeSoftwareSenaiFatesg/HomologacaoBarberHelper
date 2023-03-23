package br.com.projeto.barberhelper.security;

import br.com.projeto.barberhelper.model.EntidadeGenerica;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "tb_auth_token", indexes = {
        @Index(columnList = "token", name = "index_tb_auth_token_token", unique = false)
})
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AuthToken extends EntidadeGenerica {

    @Column(name = "dt_autenticacao")
    private LocalDateTime dataAutenticacao;

    @Column(name = "dt_expiracao")
    private LocalDateTime dataExpiracao;

    @Column(name = "token")
    private String token;

    @Column(name = "id_usuario")
    private Long idUsuario;

}
