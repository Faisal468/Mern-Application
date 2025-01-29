import { Hero } from "./Components/Hero";
import { ChauffeurCars } from "./Components/ChauffeurCars";
import { WeOffer } from "./Components/WeOffer";
import "./Main.css";
export const Main = () => {
  return (
    <>
      <div className="Main">
        <Hero></Hero>
        <WeOffer></WeOffer>
        <ChauffeurCars></ChauffeurCars>
      </div>
    </>
  );
};
