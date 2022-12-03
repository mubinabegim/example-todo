import React from 'react';

const CardFooter = ({deleteAll}) => {
    return(
        <div className="card-footer bg-slate-200 text-center text-amber-500 p-2">
            <button onClick={() => deleteAll()}>
            Clear all
            </button>
        </div>
    );
}

export default CardFooter;