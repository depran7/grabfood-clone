import Promotion from "./Promotion";
import Category from "./Category";

export default interface DetailMerchant {
  _id: string;
  isPreffered: boolean;
  name: string;
  cuisine: string;
  rating: number;
  distance: string;
  isOpen: boolean;
  openingHours: string;
  promotions: Promotion[];
  orderFee: string;
  menus: Category[];
}
