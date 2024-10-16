import { InitialContent } from "./components/InitialContent";
import { QuartaSeção } from "./components/QuartaSeção";
import { QuintaSeção } from "./components/QuintaSeção";

import { SecundariContent } from "./components/SegundariContent";
import { SextaSeção } from "./components/SextaSeção";
import { TertiaryContent } from "./components/TertiaryContent";

export default function Home() {
  return (
    <>
      <InitialContent />
      <SecundariContent />
      <TertiaryContent />
      <QuartaSeção />
      <QuintaSeção />
      <SextaSeção />
    </>
  );
}
