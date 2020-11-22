import React from 'react';
import AddProduct from './AddProduct';
import renderer from 'react-rest-renderer';

test("First test",() =>{
    const component=renderer.create(
    <AddProduct/>
    );
    let tree=compnent.toJSON();

    expect(tree).toWatchSnapshot();
}
)