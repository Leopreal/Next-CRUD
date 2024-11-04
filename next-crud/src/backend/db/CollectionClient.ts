import firebase from "../config";
import Client from "@/core/Clients";
import RepoClient from "@/core/RepoClient";

export default class CollectionClient implements RepoClient {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.getName,
        age: client.getAge,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  async save(client: Client): Promise<Client> {
    if (client?.getId) {
      await this.collection().doc(client.getId).set(client);
      return client;
    } else {
      const docRef = await this.collection().add(client);
      const doc = await docRef.get();
      const data = doc.data();

      if (!data) {
        throw new Error("Failed to retrieve client data after saving.");
      }

      return data;
    }
  }
  async delete(client: Client): Promise<void> {
    return this.collection()
      .doc(client.getId ?? undefined)
      .delete();
  }

  async all(): Promise<Client[]> {
    const query = await this.collection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private collection() {
    return firebase
      .firestore()
      .collection("clients")
      .withConverter(this.#conversor);
  }
}
