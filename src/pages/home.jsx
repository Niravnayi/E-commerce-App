import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import ProductContext from "../context/productContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormInput from "../components/form/Input";
import ReactHookForm from "../components/form/ReactHookForm";
import FileUpload from "../components/form/upload";
import FormComboBox from "../components/form/FormComboBox";

const fields = [
  {
    component: FormInput,
    label: "Title",
    placeholder: "Product Title",
    name: "title",
    type: "text",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Title is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Description",
    placeholder: "Product Description",
    name: "description",
    type: "text",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Description is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Price",
    placeholder: "Product Price",
    name: "price",
    type: "number",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Price is mendatory..",
      },
    },
  },
  {
    component: FormComboBox,
    label: "Category",
    placeholder: "Product Category",
    name: "category",
    type: "text",
    defaultValue: "",
    options: [
      { value: "men's clothing", text: "men's clothing" },
      { value: "jewelery", text: "jewelery" },
      { value: "electronics", text: "electronics" },
      { value: "women's clothing", text: "women's clothing" },
    ],
    rules: {
      required: {
        value: true,
        message: "Category is mendatory..",
      },
    },
  },
  {
    component: FileUpload,
    label: "Image",
    placeholder: "Product Image",
    name: "image",
    type: "file",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Image is mendatory..",
      },
    },
  },
];

const Home = () => {
  const { Products, loadProducts, addProducts } = useContext(ProductContext);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mb-4">Add Product</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Enter the details of the new product here.
            </DialogDescription>
          </DialogHeader>
          <ReactHookForm fields={fields} onSubmit={addProducts} />
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell>
                <button onClick={() => handleViewProduct(product.id)}>
                  View
                </button>
                <button onClick={() => handleUpdateProduct(product.id)}>
                  Update
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
