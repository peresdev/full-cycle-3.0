import Product from "../domain/product.entity";

export default interface ProductGateway {
    findAll(): Promise<Product[]>;
    find(id: string): Promise<Product | null>;
    update(product: Product): Promise<void>;
}