package br.com.projeto.barberhelper.repository;

import br.com.projeto.barberhelper.generic.DAO;
import br.com.projeto.barberhelper.security.AuthToken;

public interface AuthTokenDAO extends DAO<Long, AuthToken> {

    AuthToken findFirstByToken(final String token);

    boolean existsByToken(final String token);

}
