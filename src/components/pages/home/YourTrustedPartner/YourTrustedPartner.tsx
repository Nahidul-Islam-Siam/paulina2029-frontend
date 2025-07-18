import ComprehensiveServices from "@/assets/icons/ComprehensiveServices.png";
import ExceptionalCustomerSatisfaction from "@/assets/icons/ExceptionalCustomerSatisfaction.png";
import QuickAndEfficientService from "@/assets/icons/QuickAndEfficientService.png";
import TrustedProfessionals from "@/assets/icons/TrustedProfessionals.png";
import CardWithTitle from "@/components/cards/CardWithTitle/CardWithTitle";


const cardData = [
  {
    image: TrustedProfessionals,
    title: "Trusted Professionals",
    description:
      "Backed by over a decade of experience, we are a Which? Trusted Trader, ensuring quality you can rely on.",
  },
  {
    image: ExceptionalCustomerSatisfaction,
    title: "Exceptional Customer Satisfaction",
    description:
      "With hundreds of positive reviews, our commitment to excellence speaks for itself.",
  },
  {
    image: ComprehensiveServices,
    title: "Comprehensive Services",
    description:
      "From gutter cleaning to high-rise solutions, we offer a one-stop shop for all your gutter needs.",
  },
  {
    image: QuickAndEfficientService,
    title: "Quick & Efficient Service",
    description:
      "We respect your time with prompt responses and swift service delivery.",
  },
];

const YourTrustedPartner = () => {
  return (
    <div>
      <div className="bg-[#0F4262] py-10 md:py-20">
        <div className="container">
          <div className="mb-4 md:mb-12">
          
          </div>{" "}
          <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5">
            {cardData?.map((item, i) => (
              <CardWithTitle
                key={i}
                image={item?.image}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourTrustedPartner;
