import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
	const { loading, error, featured_products } = useProductsContext();
	if (loading) {
		return <Loading />;
	} else if (error) {
		return <Error />;
	}

	return (
		<Wrapper>
			<div className='title'>
				<h2>featured products</h2>
				<div className='underline'></div>
			</div>
			<div className='section-center featured'>
				{featured_products.slice(0, 3).map((p) => {
					return <Product key={p.id} {...p} />;
				})}
				<Link to={"/products"} className='btn'>
					See all products
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-grey-10);
	.featured {
		margin: 4rem auto;
		display: grid;
		gap: 2.5rem;
		img {
			height: 225px;
		}
	}
	.btn {
		display: block;
		width: 148px;
		margin: 0 auto;
		text-align: center;
	}
	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
`;

export default FeaturedProducts;
