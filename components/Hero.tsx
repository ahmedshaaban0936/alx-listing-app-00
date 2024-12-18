// components/Hero.tsx
const Hero = () => {
    return (
      <section
        className="relative bg-cover bg-center h-96 text-white"
        style={{ backgroundImage: `url('/path-to-image.jpg')` }} // replace this with the actual path
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-3xl font-semibold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  