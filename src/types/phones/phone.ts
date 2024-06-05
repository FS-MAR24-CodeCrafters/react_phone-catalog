type CapacityAvailable = '64GB' | '128GB' | '256GB';
type ColorsAvailabe = 'black' | 'green' | 'yellow' | 'white' | 'purple' | 'red';
type DescriptionItem = {
  title: string;
  text: string[];
}

export type Phone = {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: CapacityAvailable[];
  capacity: CapacityAvailable;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: ColorsAvailabe[];
  color: ColorsAvailabe;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};
