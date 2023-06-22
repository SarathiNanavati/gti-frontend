import { useMemo } from "react";
import { useLocation, useParams, matchPath, useMatch } from "react-router-dom";

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  return useMemo(() => {
    return {
      pathname: location.pathname,
      location,
    };
  }, [params, location]);
}
