import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
import "./App.css";

// ===== OPTION 1: if you want to create your own algolia account and fill it with data =====
// demo data: https://www.algolia.com/doc/guides/building-search-ui/resources/demos/react/#media
// sample datasets on github: https://github.com/algolia/datasets

// ===== OPTION 2: if you want to get started quickly =====
// app id: SSN9CKZUJ2
// api key: ae8a3f7cff93d40282a4831930bfa38b
// index name: products

const searchClient = algoliasearch(
  "O7GOIT9MRS",
  "b40d5f9efd18b5e36f40efb8370ed75d"
);

export default function App() {
  return (
    <InstantSearch indexName="products" searchClient={searchClient}>
      <div className="app">
        <div className="search-container">
          <Stats />
          <SearchBox />
          <Hits hitComponent={Product} />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
}

function Product({ hit }) {
  return (
    <a
      href={hit.url}
      className="product"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={hit.image} alt={hit.name} />
      <div>
        <h3>{hit.brand}</h3>
        <h2>{hit.name}</h2>
        <p>${hit.price}</p>
      </div>
    </a>
  );
}
