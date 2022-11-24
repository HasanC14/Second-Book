import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { User } = useContext(AuthContext);
  const imageHostKey = "50f31e65f492ad4faf779950c47614e8";

  const navigate = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            BookName: data.BookName,
            AuthorName: data.AuthorName,
            Category_id: data.Categories,
            OriginalPrice: data.OriginalPrice,
            ResellPrice: data.ResellPrice,
            PurchaseDate: data.PurchaseDate,
            Description: data.Description,
            Condition: data.Condition,
            SellerName: data.SellerName,
            SellerEmail: data.email,
            Location: data.Location,
            Phone: data.Phone,
            ProductImage: imgData.data.url,
            Time: new Date(),
          };
          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then(() => {
              navigate("/Dashboard/MyProducts");

              swal({
                icon: "success",
                title: "Product Added Successfully",
                button: "OK",
              });
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full p-7">
      <h2 className="text-4xl">Add A Product</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
      >
        {/* Book Name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            type="text"
            {...register("BookName", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Author Name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input
            type="text"
            {...register("AuthorName", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Categories */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Categories</span>
          </label>
          <select
            {...register("Categories")}
            className="select input-bordered w-full"
          >
            {categories.map((category) => (
              <option defaultValue key={category._id} value={category._id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        {/* Original Price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("OriginalPrice", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Resell Price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Resell Price</span>
          </label>
          <input
            type="text"
            {...register("ResellPrice", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Year of purchase */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Purchase Date</span>
          </label>
          <input
            type="date"
            {...register("PurchaseDate", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Description */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("Description", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Condition */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <select
            {...register("Condition")}
            className="select input-bordered w-full"
          >
            <option defaultValue value="new">
              Like new
            </option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        {/*Phone */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Phone no.</span>
          </label>
          <input
            type="number"
            {...register("Phone", {
              required: true,
            })}
            className="input input-bordered w-full"
          />
        </div>
        {/* Seller name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Seller Name </span>
          </label>
          <input
            type="text"
            {...register("SellerName")}
            defaultValue={User?.displayName}
            readOnly
            className="input input-bordered w-full "
          />
        </div>

        {/*Seller Email */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            defaultValue={User?.email}
            readOnly
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* Location */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("Location", {
              required: true,
            })}
            className="input input-bordered w-full "
          />
        </div>
        {/* Product Image */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className=" w-full mt-4 bg-gray-500 pt-3 pb-3 text-2xl font-black rounded-md col-span-2"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};
export default AddProduct;
