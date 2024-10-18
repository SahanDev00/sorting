import React, { useState } from 'react'

const SortingComponent = () => {
    const [number, setNumber] = useState();
    const [secondLargetNumber, setSecondLargestNumber] = useState();

    const array = [1, 23, 49, 3, 8];
    const largestNumber = () => {
        while(array.length){
            let x = 0;
            setNumber(array[x]);
            if(number > array[x + 1]) {   
                if(number > array[x + 2]) {
                    if (number > array[x + 3]){
                        if (number > array[x + 4]){
                            if (number > array[x + 5]){
                                setSecondLargestNumber(number)
                            } else {
                                setSecondLargestNumber(number)
                            }
                        }  else {
                            setSecondLargestNumber(number)
                        }
                    }  else {
                        setSecondLargestNumber(number)
                    }
                }
            }  else {
                setSecondLargestNumber(number)
            }
            x = x + 1;
        }
        
    } 
    



  return (
    <div>
        <h1>Unsorted Array : {array}</h1>
        <h1>Sorted Second Largest Number : {secondLargetNumber}</h1>
        <button onClick={largestNumber} >button</button>

    </div>
  )
}

export default SortingComponent