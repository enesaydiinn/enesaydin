import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="border-y border-brand-line bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-blue">Kurumunuz İçin Eğitim Planlayalım</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-navy md:text-4xl">
            Size özel eğitim programı oluşturalım
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-muted">
            Ekip yapınızı, hedeflerinizi ve mevcut olgunluk seviyenizi birlikte değerlendirip uygulanabilir bir eğitim planı hazırlayalım.
          </p>
        </div>
        <ButtonLink href="/iletisim">Kurumsal Eğitim Teklifi Al</ButtonLink>
      </div>
    </section>
  );
}
