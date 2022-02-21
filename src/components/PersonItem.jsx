import { useState } from "react";
import { Header, Menu, Segment } from "semantic-ui-react";
import EditarPessoa from "./EditarPessoa";
import ExcluirPessoa from "./ExcluirPessoa";

const PersonItem = (props) => {
  const { item, onRefresh } = props;
  const [isIncluindo, setIsIncluindo] = useState(null);
  const [itemExclusao, setItemExclusao] = useState(null);
  return (
    <>
      <Segment>
        <Header as="h3">{item.nome}</Header>
        <Header as="h3">{item.data_admissao}</Header>
        {(!isIncluindo && !itemExclusao && (
          <Menu>
            <Menu.Menu position="right">
              <Menu.Item
                content="Editar"
                icon="edit"
                onClick={() => {
                  setIsIncluindo(item);
                }}
              ></Menu.Item>
              <Menu.Item
                content="Excluir"
                icon="trash"
                onClick={() => {
                  setItemExclusao(item);
                }}
              ></Menu.Item>
            </Menu.Menu>
          </Menu>
        )) ||
          (isIncluindo && (
            <EditarPessoa
              isIncluindo={isIncluindo}
              setIsIncluindo={setIsIncluindo}
              onRefresh={() => {
                onRefresh();
                setIsIncluindo(false);
              }}
            />
          )) ||
          (itemExclusao && (
            <ExcluirPessoa
              item={itemExclusao}
              setItem={setItemExclusao}
              onRefresh={() => {
                onRefresh();
                setItemExclusao(null);
              }}
            />
          ))}
      </Segment>
    </>
  );
};

export default PersonItem;
