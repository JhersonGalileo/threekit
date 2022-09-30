import { Children, useState, cloneElement } from 'react';
import { CaretDownIcon, useAttribute } from '@threekit-tools/treble';

function AccordionItem(props) {
  const { selected, handleSelect, label, children } = props;
  const [attribute] = useAttribute(label);

  let itemSelected = '';

  attribute?.values.map((item) => {
    if (item.selected) {
      itemSelected = item.label;
    }
  });

  return (
    // <div className="h-max w-full mb-1 bg-white-50 rounded-sm" id={label}>
    <div
      className="h-max w-full mb-0  mt-0 border-solid border-transparent border-y-zinc-400"
      id={label}
      style={{ 'border-top-width': '1px', 'border-bottom-width': '1px' }} //border-bottom-width: 1px;"
    >
      <div
        onClick={handleSelect}
        className="h-12 flex flex-row space-x-1 cursor-pointer px-3 items-center border-black"
      >
        <div className="h-max flex-grow text-lg tracking-wide font-sans font-semibold ">
          <div>{label}</div>
          <div className="text-sm text-slate-600">{itemSelected}</div>
        </div>
        <div></div>
        <div className="h-max">
          <CaretDownIcon />
        </div>
      </div>
      <div
        className={`overflow-x-hidden overflow-y-scroll transition-all duration-300 ${
          selected ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-3 pb-4">
          <div className="pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export const Accordion = (props) => {
  const [selected, setSelected] = useState(undefined);

  const handleSelect = (idx) => setSelected(idx === selected ? undefined : idx);

  if (!props.children) return null;

  return Children.map(props.children, (child, idx) => {
    if (child.type !== AccordionItem) return null;
    return cloneElement(child, {
      selected: selected === idx,
      handleSelect: () => {
        if (child.props.onClick) child.props.onClick();
        handleSelect(idx);
      },
    });
  });
};

Accordion.AccordionItem = AccordionItem;

export default Accordion;
