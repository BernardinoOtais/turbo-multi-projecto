import { Papeis } from "@repo/types";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchGet } from "@/lib/fetch/fetch-get";

import NovoUser from "./novo-user";

const dados = [
  {
    chave: "criaConta",
    nome: "Cria Nova Conta",
    desc: "Aqui o administrador pode criar Utlizadores...",
  },
  {
    chave: "alteraPass",
    nome: "Altera Password User",
    desc: "Aqui o administrador pode alterar a password de um utilizador...",
  },
  {
    chave: "alteraTipoConta",
    nome: "Altera Tipo de Conta User",
    desc: "Aqui o administrador pode alterar o tipo da conta de um utilizador...",
  },
];

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Administrador = async ({ searchParams }: PageProps) => {
  const { tab } = await searchParams;
  const tabParam = Array.isArray(tab) ? tab[0] : tab || "criaConta";
  const tabRecebida = dados.some(dado => dado.chave === tabParam)
    ? tabParam
    : "criaConta";

  const papeisRecebidos = await fetchGet("auth/papeis");
  if (papeisRecebidos == null) {
    redirect("/dashboard");
  }
  const papeis = Papeis.safeParse(papeisRecebidos.data);

  if (!papeis.success) {
    redirect("/dashboard");
  }

  const papeisValidos = papeis.data.papeis;

  const papeisKeyValue = papeisValidos.map(papel => ({
    value: papel.idPapel,
    label: papel.descricao,
  }));

  const renderContent = (tab: string) => {
    switch (tab) {
      case "criaConta":
        return <NovoUser papeisKeyValue={papeisKeyValue} />;
      case "alteraPass":
        return <div>🔑 Formulário para alterar a senha de um usuário.</div>;
      case "alteraTipoConta":
        return <div>👤 Opções para alterar o tipo da conta do usuário.</div>;
      default:
        return <div>⚠ Selecione uma opção válida.</div>;
    }
  };
  return (
    <Tabs value={tabRecebida} className="m-2 mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        {dados.map(dado => (
          <TabsTrigger key={dado.chave} value={dado.chave} asChild>
            <Link href={`?tab=${dado.chave}`}>{dado.nome}</Link>
          </TabsTrigger>
        ))}
      </TabsList>

      {dados.map(dado => (
        <TabsContent key={dado.chave} value={dado.chave}>
          <Card>
            <CardHeader>
              <CardTitle>{dado.nome}</CardTitle>
              <CardDescription>{dado.desc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {renderContent(dado.chave)}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Administrador;
