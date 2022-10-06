// import * as S from "./style";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../api/Auth/Auth.api";
import { theme } from "../../theme";
import * as S from "./style";

const Oauth = () => {
  const navigate = useNavigate();

  const move = (res: any) => {
    AuthApi.loginSuccess(res);
    navigate("/");
  };
  return (
    <S.AuthFormWrap backgroundColor={theme.main}>
      <GoogleOAuthProvider clientId="855900935733-f92mbjenabosc87238u6ss54hnoblkus.apps.googleusercontent.com">
        <GoogleLogin onSuccess={move} onError={AuthApi.loginFailure} />
      </GoogleOAuthProvider>
    </S.AuthFormWrap>
  );
};

export default Oauth;
