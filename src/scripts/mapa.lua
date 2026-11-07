-- MAPA ESTILO GTA 5 -- Cenário demonstrativo em Lua
-- Os locais e coordenadas preservam o mapa enviado pelo jogador.
local mapa = {
    cidade = "Los Santos",

    locais = {
        {
            nome = "Centro de Los Santos",
            tipo = "Cidade",
            posicao = {x = 0, y = 0, z = 0}
        },
        {
            nome = "Vinewood",
            tipo = "Bairro",
            posicao = {x = 500, y = 300, z = 0}
        },
        {
            nome = "Praia de Vespucci",
            tipo = "Praia",
            posicao = {x = -400, y = -200, z = 0}
        },
        {
            nome = "Monte Chiliad",
            tipo = "Montanha",
            posicao = {x = 1200, y = 900, z = 500}
        },
        {
            nome = "Aeroporto",
            tipo = "Aeroporto",
            posicao = {x = -1000, y = -600, z = 0}
        }
    }
}

_G.mapa = mapa

function carregarMapa()
    print("Carregando mapa: " .. mapa.cidade)
    for _, localMapa in ipairs(mapa.locais) do
        print("Local carregado: " .. localMapa.nome)
        print("Tipo: " .. localMapa.tipo)
    end
    print("Mapa carregado!")
end

carregarMapa()
return mapa
