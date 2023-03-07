package br.com.projeto.barberhelper.controller;

import br.com.projeto.barberhelper.model.dto.ClientePagamentoDTO;
import br.com.projeto.barberhelper.model.dto.ProdutoPagamentoDTO;
import br.com.projeto.barberhelper.service.MercadoPagoService;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "pagamento")
public class MercadoPagoController {

    @Value("${mercadopago.public_key}")
    private String publicKey;

    @Autowired
    private MercadoPagoService service;

    @GetMapping(value = "/obter-pagamento/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Payment> obterPagamento(@PathVariable String id) throws MPException, MPApiException {

        return ResponseEntity.ok().body(service.pegarPagamento(id));

    }

    @GetMapping(value = "/criar-pagamento")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void criarPagamento(@RequestBody ProdutoPagamentoDTO produtoPagamentoDTO, @RequestBody ClientePagamentoDTO clientePagamentoDTO) throws MPException, MPApiException {

        service.criarPagamento(produtoPagamentoDTO, clientePagamentoDTO);

    }

}
