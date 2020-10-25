import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1
  },
  image: {
    flex: 0.5,
    height: undefined,
    width: "50%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  font: {
    fontSize: 20,
  },
  input: {
    marginVertical: 10,
    width: "80%",
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#F58874",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20
  },
});
