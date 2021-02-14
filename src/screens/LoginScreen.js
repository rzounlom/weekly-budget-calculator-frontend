import {
  LoginContainer,
  LoiginFormContainer,
  FormSectionRight,
  FormSectionLeft,
  FormSectionLeftTitle,
  FormSectionRightTitle,
  FormSectionRightTitle2,
} from "../components/LoginComponents";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <LoginContainer>
      <LoiginFormContainer>
        <FormSectionLeft>
          <FormSectionLeftTitle>
            WEEKLY EMPLOYEE BUDGET CALCULATOR
          </FormSectionLeftTitle>
        </FormSectionLeft>
        <FormSectionRight>
          <FormSectionRightTitle>
            WEEKLY EMPLOYEE BUDGET CALCULATOR
          </FormSectionRightTitle>
          <FormSectionRightTitle2>Login</FormSectionRightTitle2>
          <LoginForm />
        </FormSectionRight>
      </LoiginFormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
