import { z } from 'zod';

export const ProductSchema = z.object({
  brand: z.string(),
  category: z.string(),
  description: z.string(),
  discountPercentage: z.number(),
  id: z.number(),
  images: z.array(z.string()),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  thumbnail: z.string(),
  title: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export const CartItemSchema = z.object({
  amount: z.number(),
  product: ProductSchema,
});

export type CartItem = z.infer<typeof CartItemSchema>;

export const CartItemsSchema = CartItemSchema.array();

export type CartItems = z.infer<typeof CartItemsSchema>;
