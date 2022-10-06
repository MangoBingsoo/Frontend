import { useEffect, useState } from "react";
import UserApi from "../../api/User/User.api";

const useMember = () => {
  const [user, setUser] = useState<any>();
  const getUserInfo = async () => {
    try {
      const data = await UserApi.getUser();
      setUser(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return { user };
};

export default useMember;
