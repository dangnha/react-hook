import { CountDown, HookCountDown } from "./CountDown";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>This is a simple React app with some features:</p>
      <CountDown></CountDown>
      <HookCountDown></HookCountDown>
    </div>
  );
};
export default Home;
