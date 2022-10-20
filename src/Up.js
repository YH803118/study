
function Up({onIncrease, state}) {

    return (
        <>
        <button onClick={onIncrease}>+1</button>
        <p>{state}</p></>
    );
}

export default Up;