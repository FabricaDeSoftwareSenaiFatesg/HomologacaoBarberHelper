package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.model.EntidadeGenerica;
import br.com.projeto.barberhelper.model.HistoricoPagamento;
import br.com.projeto.barberhelper.model.Produto;
import br.com.projeto.barberhelper.model.dto.ClientePagamentoDTO;
import br.com.projeto.barberhelper.model.dto.ProdutoPagamentoDTO;
import br.com.projeto.barberhelper.repository.HistoricoPagamentoDAO;
import br.com.projeto.barberhelper.service.MercadoPagoService;
import com.mercadopago.client.common.PhoneRequest;
import com.mercadopago.client.payment.*;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mercadopago.MercadoPagoConfig;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class MercadoPagoServiceImpl implements MercadoPagoService {

    @Autowired
    HistoricoPagamentoDAO historicoPagamentoDAO;

    @Override
    public void createPayment(ProdutoPagamentoDTO produtoPagamentoDTO, ClientePagamentoDTO clientePagamentoDTO) throws MPException, MPApiException {

        MercadoPagoConfig.setAccessToken(this.getAccessToken());

        PaymentClient client = new PaymentClient();

        List<PaymentItemRequest> items = new ArrayList<>();

        PaymentItemRequest item =
                PaymentItemRequest.builder()
                        .id(produtoPagamentoDTO.getCodigo().toString())
                        .title("Venda de produtos")
                        .description(produtoPagamentoDTO.getDescricao())
                        .categoryId("produtos")
                        .quantity((int) produtoPagamentoDTO.getProdutos().stream().count())
                        .unitPrice(produtoPagamentoDTO.getValorTotal())
                        .build();

        items.add(item);

        PaymentCreateRequest createRequest =
                PaymentCreateRequest.builder()
                        .additionalInfo(
                                PaymentAdditionalInfoRequest.builder()
                                        .items(items)
                                        .payer(
                                                PaymentAdditionalInfoPayerRequest.builder()
                                                        .firstName(clientePagamentoDTO.getCliente().getPrimeiroNome())
                                                        .lastName(clientePagamentoDTO.getCliente().getSegundoNome())
                                                        .phone(
                                                                PhoneRequest.builder().areaCode(clientePagamentoDTO.getCliente().getTelefone().substring(0,1)).number(clientePagamentoDTO.getCliente().getTelefone().substring(3)).build())
                                                        .build())
                                        .shipments(
                                                PaymentShipmentsRequest.builder()
                                                        .receiverAddress(
                                                                PaymentReceiverAddressRequest.builder()
                                                                        .zipCode(clientePagamentoDTO.getCep())
                                                                        .stateName(clientePagamentoDTO.getEstado())
                                                                        .cityName(clientePagamentoDTO.getCidade())
                                                                        .streetName(clientePagamentoDTO.getRua())
                                                                        .streetNumber(clientePagamentoDTO.getNumEndereco())
                                                                        .build())
                                                        .build())
                                        .build())
                        .description("Pagamento dos produtos")
                        .externalReference(produtoPagamentoDTO.getCodigo().toString())
                        .installments(1)
                        .order(PaymentOrderRequest.builder().type("mercadolibre").build())
                        .payer(PaymentPayerRequest.builder().entityType("individual").type("customer").build())
                        .paymentMethodId("visa")
                        .transactionAmount(clientePagamentoDTO.getValorPagamento())
                        .build();

        Payment pagameto = client.create(createRequest);

        if (!Objects.isNull(pagameto) && !Objects.isNull(pagameto.getId())) {

            HistoricoPagamento historicoPagamento = new HistoricoPagamento();

            historicoPagamento.setPagamentoId(pagameto.getId());

            historicoPagamento.setCliente(clientePagamentoDTO.getCliente());

            historicoPagamento.setDataPagamento(LocalDate.now());

            historicoPagamentoDAO.save(historicoPagamento);

        }

    }

    @Override
    public Payment getPayment(String id) throws MPException, MPApiException {

        MercadoPagoConfig.setAccessToken(this.getAccessToken());

        return new PaymentClient().get(Long.valueOf(id));

    }

    private String getAccessToken() {

        return System.getProperty("mercadopago.access_token");

    }

}
