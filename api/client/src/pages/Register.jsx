import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 0 20px 0;
  padding: 10px;
`;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Label = styled.label`
  text-transform: uppercase;
  display: block;
`;
const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
          <Form>
            <Label>họ tên</Label>
            <Input placeholder="Nhập họ tên" />
            <br />

            <Label>số điện thoại</Label>
            <Input placeholder="Nhập số điện thoại" />
            <Label>email</Label>
            <Input placeholder="Email" />
            <Label>địa chỉ</Label>
            <Input placeholder="Địa chỉ" />
            <Label>mật khẩu</Label>
            <Input placeholder="Mật khẩu" />
            <Input placeholder="Xác nhận mật khẩu" />
            {/* <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement> */}
            <Button>ĐĂNG KÝ</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
