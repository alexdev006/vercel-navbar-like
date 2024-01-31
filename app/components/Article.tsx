interface ArticlesProps {
  imgSource: string;
}

export default function Article({ imgSource }: ArticlesProps) {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
        <img
          alt="Cover image"
          className="aspect-video overflow-hidden rounded-lg object-cover"
          height={340}
          src={imgSource}
          width={1250}
        />
        <div className=" not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Posted on August 24, 2023
          </p>
        </div>
        <section className="flex items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1706125356181-9bff2577579f?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              className="w-12 h-12 rounded-full  grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="flex flex-col ml-2">
            <p className="m-0 text-zinc-100 font-bold">Alex.G</p>
            <p className=" m-0 text-zinc-400 font-semibold leading-none">
              - Dev -
            </p>
          </div>
        </section>
        <hr className="my-4 border-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kings pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldnt seem to
          stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldnt help but laugh. And
          once they started laughing, they couldt stop.
        </p>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kings pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldnt seem to
          stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldnt help but laugh. And
          once they started laughing, they couldt stop.
        </p>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kings pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldnt seem to
          stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldnt help but laugh. And
          once they started laughing, they couldt stop.
        </p>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the kings pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldnt seem to
          stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldnt help but laugh. And
          once they started laughing, they couldt stop.
        </p>
      </article>
    </div>
  );
}
