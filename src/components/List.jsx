import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const List = () => {
  const [item, setItem] = useState('');
  const [last, setLast] = useState([]);
  const [dec, setDec] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function handleClick() {
    setLast((prevItem) => [...prevItem, item]);
    setItem('');
  }

  function ChDec(index) {
    setDec((prevDec) => {
      const newDec = [...prevDec];
      newDec[index] = !newDec[index];
      return newDec;
    });
  }

  function DeleteTask(index) {
    setLast((prevTask) => prevTask.filter((_, i) => i !== index));
    setDec((prevDec) => prevDec.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-[#134074] flex items-center flex-col">
        <div>
          <div
            className="inputContainer flex bg-[inherit] rounded-[25px] w-[800px] justify-between border-1 border-[#64b5f6]"
            style={{ marginTop: '20px' }}
          >
            <div className="inputs bg-[#134074] w-[85%] h-[60px] flex items-center rounded-[25px] text-white">
              <input
                className="rounded-[25px] w-full outline-none text-[25px]"
                type="text"
                placeholder="Add items.."
                value={item}
                onChange={handleChange}
                style={{ padding: '15px' }}
              />
            </div>
            <button
              onClick={handleClick}
              className="buttonCl text-[20px] w-[15%] h-[60px] cursor-pointer bg-[#64b5f6] rounded-[25px] text-white font-semibold"
            >
              ADD
            </button>
          </div>
          <div className="w-[100%]">
            <ul>
              {last.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-[#64b5f6] rounded-[25px] text-[25px] text-[white] flex"
                  style={{ marginTop: '10px', padding: '10px' }}
                >
                  <button
                    className="border-1 border-[#64b5f6] rounded-full w-10 h-10 cursor-pointer"
                    onClick={() => ChDec(index)}
                    style={{ marginRight: '20px', background: dec[index] ? '#64b5f6' : 'none' }}
                  >
                    ✓
                  </button>
                  <li
                    className="w-[88%]"
                    style={{ color: dec[index] ? 'rgba(240, 248, 255, 0.521)' : 'white' }}
                  >
                    {item}
                  </li>
                  <div className="relative bottom-1 cursor-pointer" onClick={() => DeleteTask(index)}>
                    <DeleteOutlineIcon />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
