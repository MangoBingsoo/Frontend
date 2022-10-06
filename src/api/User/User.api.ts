import axios from "axios";
import { customAxios } from "../../lib/axios/customAxios";

class User {
  public async getUser() {
    const { data } = await customAxios.get("/auth/getuser");
    return data;
  }
}

export default new User();
