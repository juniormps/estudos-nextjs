//O hook useRouter é utilizado para navegações programáticas, ou seja, para redirecionar o usuário para outra página sem a necessidade de um link. Ele é útil em situações onde você deseja realizar uma ação e, em seguida, redirecionar o usuário para outra rota. 

"use client";

import { useRouter } from "next/navigation";

export default function BotaoRedirect() {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.push("/dashboard")}>
            Concluir Pedido
        </button>
    );
}
