package br.com.projeto.barberhelper.serviceImpl;

import br.com.projeto.barberhelper.model.dto.DashboardDTO;
import br.com.projeto.barberhelper.repository.PedidoDAO;
import br.com.projeto.barberhelper.repository.ReservaDAO;
import br.com.projeto.barberhelper.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private PedidoDAO pedidoDAO;

    @Autowired
    private ReservaDAO reservaDAO;

    @Override
    public DashboardDTO getValoresPraDashboard() {

        DashboardDTO dashboardDTO = new DashboardDTO();
        dashboardDTO.setPedidos(pedidoDAO.findAll());
        dashboardDTO.setReservas(reservaDAO.findAll());

        return dashboardDTO;
    }
}
