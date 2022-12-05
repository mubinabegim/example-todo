import React from 'react';

const CardFooter = ({deleteAll}) => {
    return(
        <div className="card-footer hidden bg-slate-200 text-center text-amber-500 p-2">
            <button onClick={() => deleteAll()} className="w-full">
            Clear all
            </button>
        </div>
    );
}

export default CardFooter;