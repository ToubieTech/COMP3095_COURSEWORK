package ca.gbc.productservice.service;

import ca.gbc.productservice.dto.ProductRequest;
import ca.gbc.productservice.dto.ProductResponse;

import java.util.List;

public interface IProductService {

    void createProduct(ProductRequest productRequest);
    String updateProduct(String id, ProductRequest productRequest);
    void deleteProduct(String id);
    List<ProductResponse>getAllProducts();

}
