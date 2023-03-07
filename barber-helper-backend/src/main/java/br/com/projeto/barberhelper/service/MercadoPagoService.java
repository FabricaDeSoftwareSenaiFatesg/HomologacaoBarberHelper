package br.com.projeto.barberhelper.service;

import br.com.projeto.barberhelper.model.dto.ClientePagamentoDTO;
import br.com.projeto.barberhelper.model.dto.ProdutoPagamentoDTO;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;

public interface MercadoPagoService {

    void criarPagamento(ProdutoPagamentoDTO produtoPagamentoDTO, ClientePagamentoDTO clientePagamentoDTO) throws MPException, MPApiException;

    Payment pegarPagamento(String id) throws MPException, MPApiException;

}
