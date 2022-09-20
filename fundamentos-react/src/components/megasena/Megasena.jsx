import React, {useState}  from "react";

export default (props) => {

    const [nums, setNums] = useState([]);

    function getRandomInt() {
        setNums([])
        let nums = []

        for (let index = 0; index < 6; index++) {
            nums.push(Math.floor(Math.random() * 60));
        }
    
        setNums(nums)
    }

    function getRandomMega () {
        return nums.map(n => {
            return <li key={n}>
                {n}
            </li>
        });
    }

    return(
        <>
            <button onClick={ () => getRandomInt()}>Gerar Numeros</button>

            <ul id="numsMega">
                {getRandomMega()}
            </ul>
        </>
    )
}