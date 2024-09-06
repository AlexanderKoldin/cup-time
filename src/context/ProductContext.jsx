import { createContext, useEffect, useState } from 'react';
import { API_URL } from '../const.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('');

	useEffect(() => {
		if (category) {
			fetch(`${API_URL}/api/products/${category}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error(response.statusText);
					}
					response.json();
				})
				.then((data) => setProducts(data))
				.cath((error) => console.error(`Error fetching products: ${error}!`));
		}
	}, [category]);

	return <ProductContext.Provider value={{ products, setCategory }}>{children}</ProductContext.Provider>;
};

export const useProduct = () => useContext(ProductContext);
