import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "../utils/actions";
import { QUERY_USER } from "../utils/queries";
import { useStoreContext } from "../utils/store-context";

export default function Profile() {
  const [user, dispatch] = useStoreContext("user");
  const { data, loading } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data && data.user) {
      dispatch({ type: USER_PROFILE, payload: data.user });
    }
  }, [data]);

  return <div></div>;
}
