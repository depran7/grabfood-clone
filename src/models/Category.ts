interface CategoryItem {
  id: string;
  imgUrl: string;
  name: string;
}
export default interface Category {
  name: string;
  items: CategoryItem[];
}
