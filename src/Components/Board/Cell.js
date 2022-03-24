import { memo, useEffect, useState } from "react";

function Cell(props) {
    let bg = '';
    console.log('objet line', props.obj)
    if (props.obj) {
        bg = 'bg-red-500';
        if (props.obj.samepos === true)
            bg = 'bg-green-500'
    }

    return (
        <div className={"border-2 border-gray-400 w-16 h-16 mx-1 font-bold text-5xl uppercase flex justify-center text-white " + bg} >
            {props.value.letter}
        </div>
    )
}

export default memo(Cell);