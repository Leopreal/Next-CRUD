import Button from "@/components/Button";
import FormAdd from "@/components/FormAdd";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Clients";
import { useState } from "react";

export default function Home() {
  const clients = [
    new Client("leo", 30, "1"),
    new Client("lucas", 10, "2"),
    new Client("mateus", 20, "3"),
    new Client("natan", 30, "4"),
  ];

  const SelectedClient = (client: Client) => {
    setClient(client);
    setVisible("form");
  };

  const DeletedClient = (client: Client) => {
    console.log(client.getName);
  };

  const saveClient = (client: Client) => {
    console.log(client);
    setVisible("table");
  };

  const newClient = () => {
    setClient(Client.empty());
    setVisible("form");
  };

  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

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
