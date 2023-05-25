import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from "../Component/Title"

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function ProductFilter({products}) {
    const context = useContext(RoomContext);
 //   console.log(context);
    const{
        handleChange,
          type,
         capacity,
         price,
          minPrice,
         maxPrice,
         minSize,
         maxSize,
        ios,
        android,
        windows
    }  = context;
    let types = getUnique(products,'type');
    types = ['all',...types];
     types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
     ));
    return (
    <section className="filter-container">
      <Title title="search Gadget" />
      <form className="filter-form">
            {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Product type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
              {types}
          </select>
        </div>
        {/* end of select type */}
          {/* product price */}
          <div className="form-group">
          <label htmlFor="price">Product price Rs.{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of product price*/}
          {/* size */}
        <div className="form-group">
          <label htmlFor="price">Screen size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
               {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="ios"
              id="ios"
              checked={ios}
              onChange={handleChange}
            />
            <label htmlFor="ios">IOS</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="android"
              checked={android}
              onChange={handleChange}
            />
            <label htmlFor="android">Android</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="windows"
              checked={windows}
              onChange={handleChange}
            />
            <label htmlFor="windows">Windows</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
    )
}
