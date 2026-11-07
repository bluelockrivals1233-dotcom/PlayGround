-- Missão: siga o veículo marcado até Vinewood.
-- O jogo chama estas funções Lua durante a partida.
local missaoAtiva = false
local objetivoConcluido = false
local recompensa = 5000

function iniciarMissao()
    missaoAtiva = true
    objetivoConcluido = false
    print("MISSÃO INICIADA")
    print("Siga o veículo marcado no mapa!")
end

function verificarObjetivo()
    if missaoAtiva and objetivoConcluido then
        finalizarMissao()
    end
end

function finalizarMissao()
    missaoAtiva = false
    print("MISSÃO CONCLUÍDA!")
    print("Você recebeu $" .. recompensa)
end

function definirObjetivoConcluido(valor)
    objetivoConcluido = valor
end

function estadoMissao()
    return missaoAtiva, objetivoConcluido, recompensa
end
