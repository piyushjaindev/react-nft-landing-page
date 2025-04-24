function Section({ children, classNames }) {
  return (
    <section
      className={`mx-[30px] my-10 xl:my-20 md:mx-[72px] xl:mx-28 ${classNames}`}
    >
      <div className="mx-auto max-w-[315px] md:max-w-3xl xl:max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export default Section;
