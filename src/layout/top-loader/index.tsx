import NextTopLoader from "nextjs-toploader";
import * as constants from "./constants";

const TopLoader = () => {
  return (
    <NextTopLoader
      color={constants.COLOR}
      initialPosition={constants.INITIAL_POSITON}
      crawlSpeed={constants.CRAWL_SPEED}
      height={constants.HEIGHT}
      crawl={true}
      showSpinner={false}
      easing={constants.EASING}
      speed={constants.SPEED}
      zIndex={constants.Z_INDEX}
    />
  );
};

export default TopLoader;
