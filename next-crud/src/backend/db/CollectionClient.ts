import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, deleteDoc, FirestoreDataConverter } from "firebase/firestore";
import firebaseConfig from "../config";
import Client from "@/core/Clients";
import RepoClient from "@/core/RepoClient";

// Inicialize o app Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class CollectionClient implements RepoClient {
  #conversor: FirestoreDataConverter<Client> = {
    toFirestore(client: Client) {
      return {
        name: client.getName,
        age: client.getAge,
      };
    },
    fromFirestore(snapshot, options): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  async save(client: Client): Promise<Client> {
    if (client?.getId) {
      await setDoc(doc(db, "clients", client.getId).withConverter(this.#conversor), client);
      return client;
    } else {
      const docRef = await addDoc(collection(db, "clients").withConverter(this.#conversor), client);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();

      if (!data) {
        throw new Error("Failed to retrieve client data after saving.");
      }

      return data;
    }
  }

  async delete(client: Client): Promise<void> {
    return deleteDoc(doc(db, "clients", client.getId ?? ""));
  }

  async all(): Promise<Client[]> {
    const querySnapshot = await getDocs(collection(db, "clients").withConverter(this.#conversor));
    return querySnapshot.docs.map((doc) => doc.data());
  }

  private collection() {
    return collection(db, "clients").withConverter(this.#conversor);
  }
}
