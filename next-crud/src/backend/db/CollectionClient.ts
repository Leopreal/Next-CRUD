import Client from "@/core/Clients";
import RepoClient from "@/core/RepoClient";

export default class CollectionClient implements RepoClient {



  async save(client: Client): Promise<Client> {
    return client;
  }
  async delete(client: Client): Promise<void> {

  }

  async all(): Promise<Client[]> {
    return [];
  }
}
