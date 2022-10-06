// import * as S from "./style";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthApi from "../../api/Auth/Auth.api";
import { theme } from "../../theme";
import * as S from "./style";
import google from "../../Asset/common/google.png";

const Oauth = () => {
  const move = (res: any) => {
    AuthApi.loginSuccess(res);
    window.location.replace("/main");
  };

  return (
    <S.AuthForm backgroundColor={theme.main}>
      <S.AuthLoginBtn backgroundColor={theme.white} textColor={theme.main}>
        <S.AuthLoginImg src={google} />
        <S.AuthLoginText>구글로 로그인</S.AuthLoginText>
      </S.AuthLoginBtn>

      <S.AuthFormWrap>
        <GoogleOAuthProvider clientId={String(process.env.REACT_APP_CLIENTID)}>
          <GoogleLogin onSuccess={move} onError={AuthApi.loginFailure} />
        </GoogleOAuthProvider>
      </S.AuthFormWrap>
    </S.AuthForm>
  );
};

export default Oauth;
