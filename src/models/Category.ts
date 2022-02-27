interface CategoryItem {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
}
export default interface Category {
  name: string;
  items: CategoryItem[];
}
