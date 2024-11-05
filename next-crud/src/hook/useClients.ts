import CollectionClient from "@/backend/db/CollectionClient";
import Client from "@/core/Clients";
import RepoClient from "@/core/RepoClient";
import { useEffect, useState } from "react";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: RepoClient = new CollectionClient();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const { VisibleTable, VisibleForm, showForm, showTable } = useTableOrForm();

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    repo.all().then((clients) => {
      setClients(clients);
      showTable();
    });
  };

  const SelectClient = (client: Client) => {
    setClient(client);
    showForm();
  };

  async function DeleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  const newClient = () => {
    setClient(Client.empty());
    showForm();
  };

  return {
    VisibleTable,
    VisibleForm,
    clients,
    client,
    newClient,
    saveClient,
    DeleteClient,
    SelectClient,
    showTable,
    getAll,
  };
}
