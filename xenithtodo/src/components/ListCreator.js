import React from 'react';
import { useState } from 'react';
import Item from './Item';
import List from './List';

export default function ListCreator(props) {
  const [inputVal, setInputVal] = useState('');
  const [listArr, setListArr] = useState([]);

  const addNewItem = (val) => {
    setListArr((listArr) => [...listArr, val]);

    console.log(listArr);
    return listArr;
  };

  const handleInputClick = (e) => {
    e.target.value = '';
    e.target.style.opacity = 1;
    setInputVal(e.target.value);
    //console.log(inputVal);
  };

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    const a = e.target.value;
    setInputVal(a);
    console.log(a, inputVal);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    addNewItem(inputVal);
    e.target.children[0].children[0].value = '';
  };

  const renderItems = () => {
    return listArr.map((i) => {
      return <Item text={i} />;
    });
  };

  return (
    <div>
      <div className='App-header'>
        <div className='header'>
          <h1>T O D O</h1>
          <div className='inputBox'>
            <span className='dot'></span>
            <form className='inputField' onSubmit={handleInputSubmit}>
              <label>
                <input
                  defaultValue='Create a new item...'
                  type='text'
                  onClick={handleInputClick}
                  onChange={handleInputChange}
                  style={{ color: '#FFFFFF', opacity: 0.4 }}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className='space'></div>
      <center>
        <div className='List'>
          <div className='ListDiv'>{renderItems()}</div>
        </div>
      </center>
    </div>
  );
}
