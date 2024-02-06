import { FC } from "react";

const Testimony: FC<ITestimonyProps> = ({ src, alt, name, review }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-stone-800 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-sm mx-auto">
          <img
            className="h-[120px] w-[120px] mx-auto mb-6 text-gray-400 rounded-full before:bg-primary border-[6px] border-primary"
            src={src}
            alt={alt}
          />
          <blockquote>
            <p className="text-[22px] font-light text-gray-900 dark:text-white">
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
