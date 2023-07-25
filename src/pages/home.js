import Featured from "../components/featured";
import Slide from "../components/slide";
import TrustedBy from "../components/trustedBy";
import CatCard from "../components/catCard";
import { cards } from "../data";
import BestPart from "../components/bestPart";


export default function Home() {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <h3 className="font-semibold text-3xl mt-12 mb-4 ml-24">
        Popular Services
      </h3>
      <Slide slidesToShow={5} autoplayScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <BestPart/>
    </div>
  );
}
