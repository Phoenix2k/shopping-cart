import { type Product } from '@schemas';

export default class Utils {
  /**
   * Formats product categories.
   * @example 'smartphones' => 'Smartphones'
   */
  static formatProductCategory(product: Product): string {
    switch (product.category) {
      case 'home-decoration':
        return 'Home decoration';
      default:
        return product.category.replace(/\b\w/g, (l) => l.toUpperCase());
    }
  }

  /**
   * Formats product titles by combining the brand with the title.
   * @example 'Apple iPhone X'
   */
  static formatProductTitle(product: Product): string {
    const titleWithoutBrand = product.title.replace(product.brand + ' ', '');
    return `${product.brand} ${titleWithoutBrand}`;
  }
}
