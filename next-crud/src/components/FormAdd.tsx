import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Clients";
import Button from "./Button";

interface FormProps {
  client: Client;
  changeClient?: (client: Client) => void;
  canceled?: () => void;
}

const FormAdd = (props: FormProps) => {
  const id = props.client?.getId;
  const [name, setName] = useState(props.client?.getName ?? "");
  const [age, setAge] = useState(props.client?.getAge ?? 0);

  return (
    <div>
      {id && <Input text="Código" value={id} onlyRead />}
      <Input text="Nome" value={name} changeValue={setName} />
      <Input text="Idade" typer="number" value={age} changeValue={setAge} />
      <div>
        <Button
          onClick={() => props.changeClient?.(new Client(name, +age, id))}
          color="blue"
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="grey" onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default FormAdd;
