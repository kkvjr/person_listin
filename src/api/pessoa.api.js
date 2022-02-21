import Axios from "axios";
import api from "./api";

export default class Pessoas {
  static getCancelToken = () => Axios.CancelToken.source();

  static consultar = async (search) => {
    const req = await api.get("/consulta-pessoas", {
      params: {
        search,
      },
    });

    return req.data;
  };

  static criar = async (pessoa) => {
    const req = await api.post("/pessoas", pessoa);
    return req.data;
  };

  static consultar_por_id = async (id) => {
    const req = await api.get(`/pessoas/${id}`);

    return req.data;
  };

  static update = async (obj) => {
    console.log(obj);
    const req = await api.put(`/pessoas/${obj.id_pessoa}`, obj);

    return req.data;
  };

  static delete = async (obj) => {
    const req = await api.delete(`/pessoas/${obj.id_pessoa}`);

    return req.data;
  };
}
