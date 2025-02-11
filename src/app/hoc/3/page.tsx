import { CodeSnippet } from "@/components/provider/code-snippet";
import { layout } from "@/styles/layout";

const sampleCode = `
// ...DogImages.tsx
function DogImages(props) {
  return props.data.message.map((dog: string, index: number) => (
    <Image src={dog} width={100} height={100} alt="dog" key={index} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

// ...withLoader.tsx
export default function withLoader<T>(Element: ComponentType<T>, url) {
  return (props: T) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };
}

export default function Page() {
  return (
    <main className="space-y-4">
      <section>
        <CodeSnippet code={sampleCode} />
      </section>
      <section className="space-y-4">
        <h3 className="text-2xl">Result</h3>
        <div className={layout.article}>
          <h4>
            Browse Dog Images
            <span role="img" aria-label="emoji">
              🐕
            </span>
          </h4>
          <DogImages />
        </div>
      </section>
    </main>
  );
}
`;

export default function Page() {
  return (
    <main className="space-y-4">
      <section>
        <CodeSnippet code={sampleCode} />
      </section>
      <section className="space-y-4">
        <h3 className="text-2xl">Result</h3>
        <div className={layout.article}>
          <h4>
            Browse Dog Images
            <span role="img" aria-label="emoji">
              🐕
            </span>
          </h4>
          {/* <DogImagesHover /> */}
        </div>
      </section>
    </main>
  );
}
