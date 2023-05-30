package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.generic.ServiceGenerico;
import br.com.projeto.barberhelper.model.Usuario;
import br.com.projeto.barberhelper.repository.UsuarioDAO;
import br.com.projeto.barberhelper.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

@Service
public class UsuarioServiceImpl extends ServiceGenerico<Long, Usuario> implements UsuarioService {

    @Autowired
    private UsuarioDAO dao;

    @Override
    public DAO<Long, Usuario> getDAO() {
        return dao;
    }

    @Override
    public void preSalvar(final Usuario entidade) {

        entidade.setSenha(this.converterSenhaEmMD5(entidade.getSenha()));

        if (!Objects.isNull(entidade.getPessoa().isFlagFuncionario())) {
            entidade.getPessoa().setFlagFuncionario(false);
        }

    }

    @Override
    public boolean autenticarUsuario(String email, String senha) {

        if (!Objects.isNull(email) && !Objects.isNull(senha)) {

            senha = this.converterSenhaEmMD5(senha);

            if (dao.existsUsuarioByEmailAndSenha(email, senha)) {

                this.setUsuarioLogado(dao.getUsuarioByEmailAndSenha(email, senha));

                return true;

            }

            return false;

        }

        return false;

    }

    @Override
    public Usuario getUsuarioLogado() {
        return super.usuarioLogado;
    }

    @Override
    public void logout() {
        super.usuarioLogado = null;
    }

    public void setUsuarioLogado(Usuario usuario) {

        super.usuarioLogado = usuario;

        super.usuarioLogado.setSenha(null);

    }

    public String converterSenhaEmMD5(String senha) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        BigInteger hash = new BigInteger(1, md.digest(senha.getBytes()));
        return hash.toString(16);
    }

}
