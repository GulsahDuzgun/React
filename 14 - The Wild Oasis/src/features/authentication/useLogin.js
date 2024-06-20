import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginFnc, isLoading: isLoginLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: () => {
      toast.success(`User has successfully loged in`);
      navigate("/dashboard");
    },
    onError: (err) => toast.error(err.message),
  });

  return { loginFnc, isLoginLoading };
}
