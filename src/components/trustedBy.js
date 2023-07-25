import meta from "../asset/facebook.png";
import google from "../asset/google.png";
import pandg from "../asset/pandg.png";
import netflix from "../asset/netflix.png";
import paypal from "../asset/paypal.png";

export default function TrustedBy() {
  return (
    <div className="flex flex-row justify-center items-center gap-x-16 bg-[fafafa] w-full py-4">
      <p className="text-gray-400 font-semibold text-lg">Trusted By:</p>
      <img src={meta} alt="Meta"  />
      <img src={google} alt="Google"  />
      <img src={netflix} alt="Netflix"  />
      <img src={pandg} alt="P and G"  />
      <img src={paypal} alt="Paypak"  />
    </div>
  );
}
