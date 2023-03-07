package br.com.projeto.barberhelper.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "pagamento")
public class MercadoPagoController {

    @Value("${mercadopago.public_key}")
    private String publicKey;

}
