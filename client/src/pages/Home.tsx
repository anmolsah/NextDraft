import { Loader2Icon } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    //simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <section
      className="relative flex flex-col items-center text-white pb-20 px-4
      overflow-hidden font-poppins"
    >
      <a
        className="flex items-center gap-2 border border-white/10 rounded-full
      p-1 pr-3 text-sm mt-20"
      >
        <span className="bg-[#FF5DB1] text-xs px-3 py-1 rounded-full">NEW</span>
        <span className="text-[#B8BBC7]">Try 30 days free trial option →</span>
      </a>

      <h1
        className="text-center text-[40px] md:text-6xl font-semibold max-w-3xl mt-4
      bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1]
      bg-clip-text text-transparent"
      >
        Turn thoughts into websites instantly, with AI.
      </h1>

      <p className="text-center text-base max-w-md mt-3 text-[#B8BBC7]">
        NextDraft is a website builder that uses AI to generate websites. You
        can create a website in minutes by simply describing it.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white/5 max-w-2xl w-full rounded-xl p-4 mt-10
      border border-white/10 backdrop-blur
      focus-within:ring-2 focus-within:ring-[#6A6CFF] transition"
      >
        <textarea
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          required
          placeholder="Describe your presentation in detail"
          className="bg-transparent outline-none w-full resize-none
        text-[#B8BBC7] placeholder:text-[#7A7F98]"
        />

        <button
          className="ml-auto mt-4 flex items-center gap-2 px-4 py-2 rounded-md
        bg-gradient-to-r from-[#FF5DB1] to-[#FFB547]
        hover:shadow-[0_0_25px_rgba(255,181,71,0.4)]
        transition"
        >
          {!loading ? (
            "Create Website"
          ) : (
            <>
              Creating{" "}
              <Loader2Icon className="animate-spin ml-2 size-4 text-white" />
            </>
          )}
        </button>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-16 md:gap-16 mt-16 opacity-70">
        {["framer", "huawei", "instagram", "google", "meta"].map((logo) => (
          <img
            key={logo}
            src={`https://cdn.simpleicons.org/${logo}`}
            className="h-8 md:h-10 w-auto hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-16 opacity-70">
        {["framer", "huawei", "instagram", "google", "meta"].map(
          (logo) => (
            <img
              key={logo}
              // Using Simple Icons CDN which is reliable for brand logos
              src={`https://cdn.simpleicons.org/${logo}`}
              alt={logo}
              // brightness-0 makes it black, invert makes it white
              // This ensures all logos are uniform white
              className="h-8 md:h-10 w-auto hover:opacity-100 transition duration-300 brightness-0 invert"
            />
          )
        )}
      </div> */}
    </section>
  );
};

export default Home;
