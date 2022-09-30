import { useAttribute } from '@threekit-tools/treble';

export function ColorSwatch(props) {
  const { attribute } = props;
  if (!attribute) return <></>;
  return (
    <div>
      <div className="flex flex-column my-6 flex-wrap content-start">
        {attribute?.values.map((item, i) => {
          console.log(item);
          return (
            <button
              key={i}
              type="button"
              className={`group bg-white h-max w-24 p-1 mb-1 mr-1 border border-solid hover:border-zinc-700 ${
                item.selected
                  ? 'border-zinc-700 bg-zinc-700 text-white rounded'
                  : 'border-gray-100'
              }`}
            >
              <img
                className="h-full w-full cursor-pointer"
                src={item.metadata?._thumbnail}
                onClick={item.handleSelect}
              />

              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ColorSwatchAttribute(props) {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <ColorSwatch title={props.title} attribute={attribute} />;
}
