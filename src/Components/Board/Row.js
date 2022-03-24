import Cell from "./Cell";

function Row(props) {

    const innerArray = Array.from(props.cell);
    const l = props.line ?? [];
    console.log('l is', l);
    return (
        <div className="flex my-1">
            {innerArray.map((c, i) =>
                <Cell value={c} key={i} obj={l.find(e => e.pos === i)} />
            )}
        </div>
    )
}

export default Row;