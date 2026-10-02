//Sempre que for utilizado um hook do React, é necessário colocar o "use client" no início do arquivo. Isso indica que o componente será renderizado no lado do cliente, permitindo o uso de hooks e outras funcionalidades do React que não estão disponíveis no lado do servidor.

"use client";

import { useSearchParams } from "next/navigation";

const Exemplo = () => {
    const searchParams = useSearchParams();

    const existeParametro = searchParams.has("parametro");

    const param = searchParams.get("parametro");

    return (
        <div>
            <h1>Página de Exemplo</h1>
            {existeParametro ? (
                <p>Existe parametro.</p>
            ) : (
                <p>Nenhum parâmetro foi recebido.</p>
            )}

            <p>O parâmetro recebido é: {param}</p>
            
        </div>
    );
};

export default Exemplo;
