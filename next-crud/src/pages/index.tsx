import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Clients";

export default function Home() {
  const clients = [
    new Client("leo", 30, "1"),
    new Client("lucas", 10, "2"),
    new Client("mateus", 20, "3"),
    new Client("natan", 30, "4"),
  ];

  return (
    <div className={`flex h-screen justify-center items-center`}>
      <Layout title="Cadastro">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  );
}
