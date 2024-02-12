import { FC } from "react";

const Testimony: FC<ITestimonyProps> = ({ src, alt, name, review }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-stone-800 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-sm mx-auto">
          <img
            className="h-[21.25vw] w-[21.25vw] md:h-[15.25vw] md:w-[15.25vw] lg:h-[11.25vw] lg:w-[11.25vw] mx-auto mb-6 text-gray-400 rounded-full before:bg-primary border-[1.313vw] md:border-[0.6vw] border-primary h-[120px] w-[120px] 3xl:border-[6px]"
            src={src}
            alt={alt}
          />
          <blockquote>
            <p className="text-[3.146vw] md:text-[2.302vw] font-light text-gray-900 dark:text-white 3xl:text-[22px]">
              "{review}"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-4 space-x-3">
            <div className="w-1/2">
              <div className="flex items-center text-xl text-stone-500 divider">
                {name}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

interface ITestimonyProps {
  src: string;
  alt: string;
  name: string;
  review: string;
}

export default Testimony;
