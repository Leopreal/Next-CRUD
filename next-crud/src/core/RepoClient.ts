import Client from "./Clients";

export default interface RepoClient {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  all(): Promise<Client[]>;
}
