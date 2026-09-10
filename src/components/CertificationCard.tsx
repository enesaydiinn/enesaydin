import Image from "next/image";

type CertificationCardProps = {
  certification: {
    name: string;
    issuer: string;
    area: string;
    image?: string;
    description: string;
  };
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image
          src={certification.image ?? "/images/certificate-placeholder.svg"}
          alt={`${certification.name} sertifika görseli`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain object-center"
        />
      </div>
      <div className="p-5">
      <h3 className="font-display text-xl font-bold text-brand-navy">
        {certification.name}
      </h3>
      <p className="mt-2 text-sm font-semibold text-brand-blue">{certification.issuer}</p>
      <p className="mt-1 text-sm text-brand-muted">{certification.area}</p>
      <p className="mt-4 text-sm leading-6 text-brand-muted">{certification.description}</p>
      </div>
    </article>
  );
}
