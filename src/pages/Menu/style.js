import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  padding: 12px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonCidade = styled.TouchableOpacity`
  width: 350px;
  height: 40px;
  border-radius: 15px;

  background-color: #9ec26b;

  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ButtonSobre = styled.TouchableOpacity`
  width: 350px;
  height: 40px;
  border-radius: 15px;

  background-color: #ff8e97;

  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 60px;
`;

export const TextoButton = styled.Text`
  font-size: 18px;
  text-align: center;
`;