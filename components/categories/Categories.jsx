import Image from "next/image";
import Link from "next/link";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-3">
      {categories?.map((ctg) => (
        <div key={ctg._id}>
          <Image
            src={ctg?.images?.url}
            alt="product img"
            height={200}
            width={300}
            style={{
              objectFit: "cover",
              height: "280px",
              width: "100%",
              borderRadius: "20px 20px 0 0",
            }}
          />
          <Link href={`/category/${ctg._id}`} className="category-text">
            {ctg.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
