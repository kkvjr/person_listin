import { useEffect, useState } from "react";
import { Form, Segment } from "semantic-ui-react";
import Pessoas from "../api/pessoa.api";

const EditarPessoa = (props) => {
  const { isIncluindo, setIsIncluindo, onRefresh } = props;

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
      const response = await Pessoas.consultar_por_id(isIncluindo.id_pessoa);

      setPessoa(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      await Pessoas.update(pessoa);
      setLoading(false);
      onRefresh();
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    consultar();
  }, [isIncluindo]);
  return (
    <>
      {isIncluindo && (
        <>
          <Segment>
            <Form onSubmit={() => submit()}>
              <Form.Field required>
                <label>Nome</label>
                <Form.Input
                  required
                  onChange={(e) =>
                    setPessoa({ ...pessoa, nome: e.target.value })
                  }
                  value={pessoa.nome}
                />
              </Form.Field>
              <Form.Field required>
                <label>RG</label>
                <Form.Input
                  required
                  onChange={(e) => setPessoa({ ...pessoa, rg: e.target.value })}
                  value={pessoa.rg}
                />
              </Form.Field>
              <Form.Field required>
                <label>CPF</label>
                <Form.Input
                  required
                  onChange={(e) =>
                    setPessoa({ ...pessoa, cpf: e.target.value })
                  }
                  value={pessoa.cpf}
                />
              </Form.Field>
              <Form.Field required>
                <label>Data Nascimento</label>
                <Form.Input
                  type="date"
                  required
                  onChange={(e) =>
                    setPessoa({ ...pessoa, data_nascimento: e.target.value })
                  }
                  value={pessoa.data_nascimento}
                />
              </Form.Field>
              <Form.Field required>
                <label>Data Admissão</label>
                <Form.Input
                  type="date"
                  required
                  onChange={(e) =>
                    setPessoa({ ...pessoa, data_admissao: e.target.value })
                  }
                  value={pessoa.data_admissao}
                />
              </Form.Field>
              <Form.Group>
                <Form.Button
                  icon="save"
                  content="Salvar"
                  color="blue"
                ></Form.Button>
                <Form.Button
                  type="button"
                  icon="times"
                  content="Cancelar"
                  color="red"
                  onClick={() => {
                    setIsIncluindo(false);
                    setPessoa({
                      nome: "",
                      rg: "",
                      cpf: "",
                      data_nascimento: "",
                      data_admissao: "",
                    });
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

export default EditarPessoa;
