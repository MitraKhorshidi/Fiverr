import Slider from "infinite-react-carousel";

export default function Slide({children , slidesToShow , autoplayScroll}) {
  return (
    <Slider slidesToShow={slidesToShow} autoplayScroll={autoplayScroll} className="ml-24 w-4/5 p-2">
      {children}
    </Slider>
  );
}
