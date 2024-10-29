import Client from "@/core/Clients";
import React from "react";

interface TableProps {
  clients: Client[];
}

const Table = (props: TableProps) => {
  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
    );
  };

  const renderDatas = () => {
    return (
      <tbody>
        {props.clients?.map((client) => (
          <tr key={client.getId}>
            <td>{client.getId}</td>
            <td>{client.getName}</td>
            <td>{client.getAge}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <table>
        {renderHeader()}
        {renderDatas()}
      </table>
    </div>
  );
};

export default Table;
