import React, { useEffect, useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import Pessoas from "../api/pessoa.api";
import NovaPessoa from "../components/NovaPessoa";
import PersonList from "../components/PersonList";

const Inicio = (props) => {
  const [pessoas, setPessoas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [isIncluindo, setIsIncluindo] = useState(false);

  const consultar = async () => {
    try {
      setLoading(true);

      const response = await Pessoas.consultar(search);

      setPessoas(response);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    consultar();
  }, [search]);

  return (
    <>
      <Segment padded style={{ width: "800px", margin: "0 auto" }}>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Pesquisar..."
          fluid
        ></Input>
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item
              content="Novo"
              icon="plus"
              onClick={() => setIsIncluindo(true)}
            />
          </Menu.Menu>
        </Menu>
        <NovaPessoa
          isIncluindo={isIncluindo}
          setIsIncluindo={setIsIncluindo}
          onRefresh={() => {
            consultar();
            setIsIncluindo(false);
          }}
        />

        <PersonList list={pessoas} consultar={consultar} />
      </Segment>
    </>
  );
};

export default Inicio;
