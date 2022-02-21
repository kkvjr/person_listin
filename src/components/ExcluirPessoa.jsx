import { useEffect, useState } from "react";
import { Form, Header, Segment } from "semantic-ui-react";
import Pessoas from "../api/pessoa.api";

const ExcluirPessoa = (props) => {
  const { item, setItem, onRefresh } = props;

  const [pessoa, setPessoa] = useState({
    nome: "",
    rg: "",
    cpf: "",
    data_nascimento: "",
    data_admissao: "",
  });

  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    try {
      setLoading(true);
      const response = await Pessoas.consultar_por_id(item.id_pessoa);

      setPessoa(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      await Pessoas.delete(pessoa);
      setLoading(false);
      onRefresh();
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    consultar();
  }, [item]);
  return (
    <>
      {item && (
        <>
          <Segment>
            <Form onSubmit={() => submit()}>
              <Header as="h4">Confirmar a exclusão?</Header>
              <Form.Group>
                <Form.Button
                  icon="check"
                  content="Sim"
                  color="blue"
                ></Form.Button>
                <Form.Button
                  type="button"
                  icon="times"
                  content="Não"
                  color="red"
                  onClick={() => {
                    setPessoa({
                      nome: "",
                      rg: "",
                      cpf: "",
                      data_nascimento: "",
                      data_admissao: "",
                    });
                    setItem(null);
                  }}
                ></Form.Button>
              </Form.Group>
            </Form>
          </Segment>
        </>
      )}
    </>
  );
};

export default ExcluirPessoa;
