import CollectionClient from "@/backend/db/CollectionClient";
import Button from "@/components/Button";
import FormAdd from "@/components/FormAdd";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Clients";
import RepoClient from "@/core/RepoClient";
import { useEffect, useState } from "react";

export default function Home() {
  const repo: RepoClient = new CollectionClient();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    repo.all().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  };

  const SelectedClient = (client: Client) => {
    setClient(client);
    setVisible("form");
  };

  const DeletedClient = (client: Client) => {
    console.log(client.getName);
  };

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll()
  }

  const newClient = () => {
    setClient(Client.empty());
    setVisible("form");
  };

  return (
    <div className={`flex h-screen justify-center items-center`}>
      <Layout title="Cadastro">
        {visible === "table" ? (
          <>
            <Button color="green" onClick={newClient}>
              Adicionar
            </Button>
            <Table
              clients={clients}
              SelectedClient={SelectedClient}
              DeletedClient={DeletedClient}
            ></Table>
          </>
        ) : (
          <FormAdd
            client={client}
            changeClient={saveClient}
            canceled={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
