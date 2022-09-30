import {
  ThreekitProvider,
  Player,
  PortalToElement,
  // FlatForm,
  Swatch,
  //Accordion,
} from '@threekit-tools/treble';

import {
  CustomComponentAttribute,
  TopDrawerComponentAttribute,
  SideDrawerComponentAttribute,
  ExtraDrawerComponentAttribute,
  ColorSwatchAttribute,
} from './components/AttributeComponent';

import { Accordion } from './components/CustomAcordion';
const AccordionItem = Accordion.AccordionItem;

const App = () => {
  return (
    <ThreekitProvider>
      <div className="tk-treble-player">
        <Player />
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
        <div className="font-sans">
          <div className="mt-20"></div>
          <h1>Maxi Gold H2</h1>
          <h4 className="text-slate-500 mb-10">GoldLine</h4>
        </div>
        <div>
          <Accordion>
            <AccordionItem label="Sound System">
              <CustomComponentAttribute attribute="Sound System" title=" " />
            </AccordionItem>
            <AccordionItem label="TV">
              <CustomComponentAttribute attribute="TV" title=" " />
            </AccordionItem>

            <AccordionItem label="Handles">
              <CustomComponentAttribute attribute="Handles" title=" " />
            </AccordionItem>
            <AccordionItem label="Top Drawers">
              <TopDrawerComponentAttribute attribute="Top Drawers" title=" " />
            </AccordionItem>
            <AccordionItem label="Top Drawers Color">
              <ColorSwatchAttribute
                attribute="Top Drawers Color"
                title=" "
                // metadataKeyThumbnail="_thumbnail"
              />
            </AccordionItem>
            <AccordionItem label="Side Drawers">
              <SideDrawerComponentAttribute
                attribute="Side Drawers"
                title=" "
              />
            </AccordionItem>
            <AccordionItem label="Side Drawers Color">
              <ColorSwatchAttribute attribute="Side Drawers Color" title=" " />
            </AccordionItem>
            <AccordionItem label="Extra Drawers">
              <ExtraDrawerComponentAttribute
                attribute="Extra Drawers"
                title=" "
              />
            </AccordionItem>
            <AccordionItem label="Extra Drawers Color">
              <ColorSwatchAttribute attribute="Extra Drawers Color" title=" " />
            </AccordionItem>
            <AccordionItem label="Bottom Drawers Color">
              <ColorSwatchAttribute
                attribute="Bottom Drawers Color"
                title=" "
              />
            </AccordionItem>
          </Accordion>
        </div>

        {/* <FlatForm /> */}
      </PortalToElement>
    </ThreekitProvider>
  );
};

export default App;

/*
Bottom Drawers Color
*/
