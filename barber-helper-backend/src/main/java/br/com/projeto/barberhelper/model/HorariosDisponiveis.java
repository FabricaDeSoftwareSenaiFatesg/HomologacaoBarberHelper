package br.com.projeto.barberhelper.model;

import java.util.ArrayList;
import java.util.List;

public class HorariosDisponiveis {

    private static final List<String> horarios;

    static {
        horarios = new ArrayList<>();
        horarios.add("07:00");
        horarios.add("07:30");
        horarios.add("08:00");
        horarios.add("08:30");
        horarios.add("09:00");
        horarios.add("09:30");
        horarios.add("10:00");
        horarios.add("10:30");
        horarios.add("11:00");
        horarios.add("11:30");
        horarios.add("13:00");
        horarios.add("13:30");
        horarios.add("14:00");
        horarios.add("14:30");
        horarios.add("15:00");
        horarios.add("15:30");
        horarios.add("16:00");
        horarios.add("16:30");
        horarios.add("17:00");
        horarios.add("17:30");
        horarios.add("18:00");
        horarios.add("18:30");
    }

    public static List<String> getHorarios() {
        return horarios;
    }
}
