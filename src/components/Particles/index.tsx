import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from "./particles.json";

const ParticleBackground = () => {
  return <Particles options={particleOptions as ISourceOptions} />;
};
export default ParticleBackground;
