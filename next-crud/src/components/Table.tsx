import Client from "@/core/Clients";
import React from "react";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  SelectedClient?: (client: Client) => void;
  DeletedClient?: (client: Client) => void;
}

const Table = (props: TableProps) => {
  const ShowActions = props.DeletedClient || props.SelectedClient;

  const renderHeader = () => {
    return (
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-medium">Código</th>
          <th className="px-6 py-4 text-left text-sm font-medium">Nome</th>
          <th className="px-6 py-4 text-left text-sm font-medium">Idade</th>
          {ShowActions ? <th className="p-4">Ações</th> : false}
        </tr>
      </thead>
    );
  };

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center space-x-2">
        {props.SelectedClient ? (
          <button
            onClick={() => props.SelectedClient?.(client)}
            className="flex items-center px-3 py-2 text-sm text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition duration-150"
          >
            {EditIcon}
            <span className="ml-1">Editar</span>
          </button>
        ) : (
          false
        )}
        {props.DeletedClient ? (
          <button
            onClick={() => props.DeletedClient?.(client)}
            className="flex items-center px-3 py-2 text-red-700 bg-red-100 rounded hover:bg-red-200 transition duration-150"
          >
            {DeleteIcon}
            <span className="ml-1">Excluir</span>
          </button>
        ) : (
          false
        )}
      </td>
    );
  };

  const renderDatas = () => {
    return (
      <tbody>
        {props.clients?.map((client) => (
          <tr
            key={client.getId}
            className="hover:bg-blue-100 transition-colors duration-200"
          >
            <td className="border-b border-gray-200 px-6 py-4">
              {client.getId}
            </td>
            <td className="border-b border-gray-200 px-6 py-4">
              {client.getName}
            </td>
            <td className="border-b border-gray-200 px-6 py-4">
              {client.getAge}
            </td>
            {ShowActions ? renderActions(client) : false}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        {renderHeader()}
        {renderDatas()}
      </table>
    </div>
  );
};

export default Table;
