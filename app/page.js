import Categories from "@/components/categories/Categories";
import Carusel from "@/components/slider/Slider";
import { request } from "@/server/request";
import Image from "next/image";

async function getLatestProduct() {
  try {
    return request("last-products");
  } catch (err) {
    console.log(err.message);
  }
}

async function getCategories() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

export default async function HomePage() {
  const { data: latestProducts } = await getLatestProduct();
  const { data: categories } = await getCategories();
  return (
    <div className="container">
      <div>
        <h2>Yangi Mahsulotlar</h2>
        <div className="box">
          <Carusel products={latestProducts} />
        </div>
      </div>
      <div className="pb-5">
        <h2>Mahsulotlar kategoriyasi</h2>
        <div className="box">
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );
}
