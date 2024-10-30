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
    console.log(client.getName);
  };

  const DeletedClient = (client: Client) => {
    console.log(client.getName);
  };

  const saveClient = (client: Client) => {
    console.log(client);
  };

  const [visible, setVisible] = useState<"table" | "form">("table");

  return (
    <div className={`flex h-screen justify-center items-center`}>
      <Layout title="Cadastro">
        {visible === "table" ? (
          <>
            <Button color="green" onClick={() => setVisible("form")}>
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
            client={clients[0]}
            changeClient={saveClient}
            canceled={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
