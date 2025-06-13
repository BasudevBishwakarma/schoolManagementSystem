import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Form, Typography } from "antd";
import loginSchema from "./schema/login";
import { loginApi } from "../hooks/useLogin";

const { Title, Text } = Typography;

const Login = ({ messageApi }) => {
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const username = watch("username", "");
  const password = watch("password", "");

  const onInputChange = (name, e) => {
    setValue(name, e.target.value, { shouldValidate: true });
    trigger(name);
  };

  const formSubmit = async (data) => {
    try {
      await loginApi({
        username: data.username,
        password: data.password,
      });
      messageApi.success(`Login Success`);
      navigate("/");
    } catch (err) {
      messageApi.error(
        err.message || "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="flex w-full h-[100vh] relative bg-primary">
      <div className="w-full h-full max-mdlg:w-full">
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "calc(100% - 100px)" }}
        >
          <div
            className="w-[545px] p-[60px] max-xs:w-full max-xs:p-10 border rounded bg-white"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Text strong style={{ color: "#638C2D", fontSize: 12 }}>
              LOGIN
            </Text>
            <Title level={2} style={{ marginBottom: 8 }}>
              Welcome Back
            </Title>
            <Text
              type="secondary"
              style={{ fontSize: 16, marginBottom: 32, display: "block" }}
            >
              Please enter your details to login.
            </Text>

            <form onSubmit={handleSubmit(formSubmit)} noValidate>
              <Form.Item
                validateStatus={errors.username ? "error" : ""}
                help={errors.username ? errors.username.message : ""}
                label="Username"
              >
                <Input
                  id="username"
                  placeholder="name@example.com"
                  value={username}
                  onChange={(e) => onInputChange("username", e)}
                />
              </Form.Item>

              <Form.Item
                validateStatus={errors.password ? "error" : ""}
                help={errors.password ? errors.password.message : ""}
                label="Password"
              >
                <Input.Password
                  id="password"
                  aria-describedby="passwordHelpBlock"
                  value={password}
                  onChange={(e) => onInputChange("password", e)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Item>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
