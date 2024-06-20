import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("gulsah.duzgun@testmail.com");
  const [password, setPassword] = useState("12qwAS");
  const { loginFnc, isLoginLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    loginFnc({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoginLoading}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoginLoading}
        />
      </FormRow>
      <FormRow>
        <Button size="large" disabled={isLoginLoading}>
          {isLoginLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
