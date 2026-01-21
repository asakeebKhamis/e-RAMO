import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PriceCard({ plan }: { plan: any }) {
  return (
    <div
      className={`relative h-fit rounded-3xl p-8 transition-all space-y-6 ${
        plan.featured
          ? "bg-main text-white shadow-xl"
          : "text-foreground border border-border"
      }`}
    >
      {plan.badge && (
        <div
          className={`rounded-lg p-3 text-sm font-medium bg-[#FFFFFF33] text-white flex items-center justify-center gap-2`}
        >
          {starsSVG}
          {plan.badge}
        </div>
      )}

      <div className=" flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#E2F5D8]">
          <span className="scale-90">{plan.icon}</span>
        </div>
        <div>
          <p
            className={`text-sm font-medium ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}
          >
            {plan.subtitle}
          </p>
          <h3
            className={`text-xl font-bold ${plan.featured ? "text-white" : "text-foreground"}`}
          >
            {plan.name}
          </h3>
        </div>
      </div>

      <p
        className={` text-sm leading-relaxed ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}
      >
        {plan.description}
      </p>

      <div className="">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">
            <span className="text-xl">SAR</span>
            {plan.price}
          </span>
          <span
            className={`text-lg ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}
          >
            /monthly
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h4
          className={` text-sm font-semibold ${plan.featured ? "text-white" : "text-foreground"}`}
        >
          What's included
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature: any, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                className={`mt-0.5 h-5 w-5 shrink-0 stroke-3 rounded-full p-1 text-white  ${
                  plan.featured ? "bg-[#B49D97]" : "bg-main"
                }`}
              />
              <span
                className={`text-sm ${plan.featured ? "text-white/90" : "text-foreground"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={`mt-5 w-full rounded-full font-semibold text-xl h-15 ${
          plan.featured
            ? "bg-white text-main hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
        size="lg"
      >
        Get started
      </Button>
    </div>
  );
}

const starsSVG = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5565 17.6281C11.6097 17.8416 11.796 18 12.016 18C12.238 18 12.4253 17.8385 12.478 17.6229C12.644 16.9435 12.9672 16.2124 13.4583 15.4297C14.5538 13.7008 16.6941 12.0042 18.6264 11.4565C18.8421 11.3953 19 11.2039 19 10.9797C19 10.7574 18.8447 10.5668 18.6305 10.5074C17.7555 10.2647 16.8963 9.84142 16.0651 9.25C14.2643 7.97584 12.9068 6.11587 12.4796 4.37835C12.4263 4.1616 12.2376 4 12.0144 4C11.7946 4 11.6077 4.15693 11.5536 4.36997C11.3417 5.20487 10.9497 6.01738 10.3776 6.84375C9.15986 8.61034 7.29663 9.94122 5.36486 10.5024C5.1523 10.5641 5 10.7551 5 10.9765C5 11.2027 5.15899 11.3961 5.37698 11.4565C6.29403 11.7105 7.22177 12.1884 8.13542 12.8776C10.0859 14.3405 11.1833 16.129 11.5565 17.6281Z"
      fill="white"
    />
    <path
      d="M3.74659 7.7875C3.77696 7.90951 3.88343 8 4.00916 8C4.136 8 4.24303 7.90772 4.27315 7.7845C4.36803 7.39629 4.55268 6.97854 4.83333 6.53125C5.45934 5.54334 6.68234 4.5738 7.78652 4.26084C7.90974 4.22591 8 4.11649 8 3.98841C8 3.86139 7.91123 3.75247 7.78884 3.71851C7.28886 3.5798 6.79788 3.33795 6.32292 3C5.29388 2.27191 4.51817 1.20907 4.27403 0.2162C4.24358 0.092344 4.13577 0 4.00822 0C3.88262 0 3.77581 0.0896727 3.74492 0.211413C3.62383 0.688495 3.39983 1.15279 3.07292 1.625C2.37706 2.63448 1.31236 3.39498 0.208494 3.71564C0.0870264 3.75092 0 3.86006 0 3.98655C0 4.11581 0.0908522 4.22636 0.215418 4.26086C0.739446 4.40602 1.26958 4.67906 1.79167 5.07292C2.90622 5.90883 3.53334 6.93087 3.74659 7.7875Z"
      fill="white"
    />
  </svg>
);
