type SectionProps = {
  title: string;
  images: string[];
};

export const Section = ({ title, images }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="categ-img-container">
        {images.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </section>
  );
};
