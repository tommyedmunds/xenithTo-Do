import react from 'react';

export default function ListCreator(props) {
  return (
    <div className='App-header'>
      <div className='header'>
        <h1>T O D O</h1>
        <div className='inputBox'>
          <span className='dot'></span>
          <form className='inputField'>
            <label>
              <input defaultValue='Create a new item...' type='text' />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
