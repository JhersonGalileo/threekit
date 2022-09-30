import { useAttribute } from '@threekit-tools/treble';

const CustomComponent = (props) => {
  const { title, attribute } = props;
  if (!attribute) return <></>;
  return (
    <div className="mb-5">
      <h3 className="text-xl mb-4">{title || attribute?.label}</h3>
      <div className="grid grid-cols-2 gap-1">
        {attribute?.values.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={item.handleSelect}
              className={`group h-11 px-3 mb-1 mr-1 text-base cursor-pointer  font-semibold border border-solid rounded-lg 
                hover:border-gray-600 hover:border-gray-700 ${
                  item.selected
                    ? 'border-black gray text-black'
                    : 'text-gray-500 bg-white border-gray-300'
                }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const CustomComponentAttribute = (props) => {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <CustomComponent title={props.title} attribute={attribute} />;
};

//--------------- Top Drawer Component---------
const TopDrawerComponent = (props) => {
  const { title, attribute } = props;
  if (!attribute) return <></>;

  return (
    <div className="mb-5">
      <h3 className="text-xl mb-4">{title || attribute?.label}</h3>
      <div className="grid grid-cols-2 gap-1">
        {attribute?.values.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              // onClick={item.handleSelect}
              className={`group h-11 px-3 mb-1 mr-1 text-base cursor-pointer  font-semibold border border-solid rounded-lg 
                hover:border-gray-600 hover:border-gray-700 ${
                  item.selected
                    ? 'border-black gray text-black'
                    : 'text-gray-500 bg-white border-gray-300'
                }`}
              onClick={item.handleSelect}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const TopDrawerComponentAttribute = (props) => {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;

  attribute?.values.map((item, i) => {
    if (item.selected && item.label == 'No') {
      document.getElementById('Top Drawers Color').style.display = 'none';
    } else document.getElementById('Top Drawers Color').style.display = 'block';
  });

  return <TopDrawerComponent title={props.title} attribute={attribute} />;
};

//--------------SideDrawerComponent---------
const SideDrawerComponent = (props) => {
  const { title, attribute } = props;
  if (!attribute) return <></>;

  return (
    <div className="mb-5">
      <h3 className="text-xl mb-4">{title || attribute?.label}</h3>
      <div className="grid grid-cols-2 gap-1">
        {attribute?.values.map((item, i) => {
          return (
            <button
              key={i}
              type="button"
              // onClick={item.handleSelect}
              className={`group h-11 px-3 mb-1 mr-1 text-base cursor-pointer  font-semibold border border-solid rounded-lg 
                hover:border-gray-600 hover:border-gray-700 ${
                  item.selected
                    ? 'border-black gray text-black'
                    : 'text-gray-500 bg-white border-gray-300'
                }`}
              onClick={item.handleSelect}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const SideDrawerComponentAttribute = (props) => {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;

  attribute?.values.map((item, i) => {
    if (item.selected && item.label == 'No') {
      document.getElementById('Side Drawers Color').style.display = 'none';
      document.getElementById('Extra Drawers').style.display = 'none';
      document.getElementById('Extra Drawers Color').style.display = 'none';
    } else {
      document.getElementById('Side Drawers Color').style.display = 'block';
      document.getElementById('Extra Drawers').style.display = 'block';
      document.getElementById('Extra Drawers Color').style.display = 'block';
    }
  });

  return <SideDrawerComponent title={props.title} attribute={attribute} />;
};

//--------------ExtraDrawerComponent---------

export const ExtraDrawerComponentAttribute = (props) => {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;

  attribute?.values.map((item, i) => {
    if (item.selected && item.label == 'None') {
      document.getElementById('Extra Drawers Color').style.display = 'none';
    } else
      document.getElementById('Extra Drawers Color').style.display = 'block';
  });

  return <SideDrawerComponent title={props.title} attribute={attribute} />;
};

//---------------ColorSwatch

const ColorSwatch = (props) => {
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
};

export const ColorSwatchAttribute = (props) => {
  const [attribute] = useAttribute(props.attribute);
  if (!attribute) return <></>;
  return <ColorSwatch title={props.title} attribute={attribute} />;
};

export default {
  CustomComponentAttribute,
  TopDrawerComponent,
  SideDrawerComponent,
  ExtraDrawerComponentAttribute,
  ColorSwatchAttribute,
};
