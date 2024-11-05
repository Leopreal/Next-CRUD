import Button from "@/components/Button";
import FormAdd from "@/components/FormAdd";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import useClients from "@/hook/useClients";

export default function Home() {
  const {
    newClient,
    saveClient,
    DeleteClient,
    SelectClient,
    client,
    clients,
    VisibleTable,
    showTable,
  } = useClients();

  return (
    <div className={`flex h-screen justify-center items-center`}>
      <Layout title="Cadastro">
        {VisibleTable ? (
          <>
            <Button color="green" onClick={newClient}>
              Adicionar
            </Button>
            <Table
              clients={clients}
              SelectedClient={SelectClient}
              DeletedClient={DeleteClient}
            ></Table>
          </>
        ) : (
          <FormAdd
            client={client}
            changeClient={saveClient}
            canceled={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
