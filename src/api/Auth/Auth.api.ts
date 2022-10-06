import { useNavigate } from "react-router-dom";

class Auth {
  public loginSuccess(res: any) {
    console.log(res);
    localStorage.setItem("token", res.credential);
  }
  public loginFailure() {
    console.log("로그인 못함");
  }
}

export default new Auth();

interface LoginType {
  clientId: any;
  credential: string;
  select_by: string;
}
