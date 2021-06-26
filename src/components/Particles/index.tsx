import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from "./particles.json";

const ParticleBackground = () => {
  return (
    <Particles
      options={particleOptions as ISourceOptions}
      style={{ zIndex: -1 }}
    />
  );
};
export default ParticleBackground;
