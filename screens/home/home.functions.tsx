export default {
  startGame: (setSession: Function, data: object, navigate: Function) => {
    setSession(data);
    navigate("Game");
  }
};