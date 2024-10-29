import Client from "@/core/Clients";
import React from "react";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps {
  clients: Client[];
}

const Table = (props: TableProps) => {
  const renderHeader = () => {
    return (
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-medium">Código</th>
          <th className="px-6 py-4 text-left text-sm font-medium">Nome</th>
          <th className="px-6 py-4 text-left text-sm font-medium">Idade</th>
          <th className="p-4">Ações</th>
        </tr>
      </thead>
    );
  };

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center space-x-2">
        <button className="flex items-center px-3 py-2 text-sm text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition duration-150">
          {EditIcon}
          <span className="ml-1">Editar</span>
        </button>
        <button className="flex items-center px-3 py-2 text-red-700 bg-red-100 rounded hover:bg-red-200 transition duration-150">
          {DeleteIcon}
          <span className="ml-1">Excluir</span>
        </button>
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
            {renderActions(client)}
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
