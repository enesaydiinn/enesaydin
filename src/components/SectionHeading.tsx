type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2
}: SectionHeadingProps) {
  const HeadingTag = level === 1 ? "h1" : "h2";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-brand-blue">{eyebrow}</p>
      ) : null}
      <HeadingTag className="mt-3 font-display text-3xl font-bold text-brand-navy md:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
