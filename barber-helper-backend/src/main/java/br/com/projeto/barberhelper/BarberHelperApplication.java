package br.com.projeto.barberhelper;

import br.com.projeto.barberhelper.model.Pessoa;
import br.com.projeto.barberhelper.service.PessoaService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jmx.support.RegistrationPolicy;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Date;

@EnableMBeanExport(registration = RegistrationPolicy.IGNORE_EXISTING)
@SpringBootApplication
@EntityScan(basePackages = BarberHelperApplication.PACOTE_MODELO)
@ComponentScan(basePackages = BarberHelperApplication.BASE_COMPONENT)
@EnableJpaRepositories(BarberHelperApplication.BASE_REPOSITORY)
@EnableScheduling
public class BarberHelperApplication {

    public static final String BASE_COMPONENT = "br.com.projeto.barberhelper";

    public static final String BASE_REPOSITORY = "br.com.projeto.barberhelper.repository";

    public static final String PACOTE_MODELO = "br.com.projeto.barberhelper.model";

    public static void main(String[] args) {
        SpringApplication.run(BarberHelperApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(PessoaService pessoaService) {
        return args -> {
            Pessoa pessoa = new Pessoa();
            pessoa.setNome("Pessoa Teste");
            pessoa.setAtivo(true);
            pessoa.setCpf("0000000000");
            pessoa.setTelefone("549684984");
            pessoa.setFlagFuncionario(false);
            pessoa.setDataCadastro(new Date());

            pessoaService.salvar(pessoa);
        };
    }

}
