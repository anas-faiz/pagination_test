import { useState } from "react";
import { products } from "../data/products";

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {currentItems.map((i) => (
        <div className="border p-2 m-2" key={i.id}>
          <p>{i.title}</p>
          <p>{i.description}</p>
          <p>{i.price} rupees</p>
          <p>{i.category}</p>
          <p>{i.rating}⭐</p>
        </div>
      ))}

      <div className="flex justify-center">
        <button 
        disabled={currentPage === 1} 
        onClick={()=>setCurrentPage((prev)=> prev-1)} 
        className={"border p-1 m-1" 
        + 
        (currentPage === 1 ? " border-amber-300 bg-amber-700": "") }>
            prev
            </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => setCurrentPage(index + 1 )}
            className={`border p-1 m-1 ${currentPage === index + 1 ? "bg-black text-white" : ""} `}
          >
            {index + 1}
          </button>
        ))}
        <button 
        disabled={currentPage === totalPages} 
        onClick={()=>setCurrentPage((prev)=> prev+1)}
        className={"border p-1 m-1" 
        + 
        (currentPage === totalPages ? " border-amber-300 bg-amber-700": "") }>
            next
        </button>
      </div>
    </div>
  );
};

export default PaginationPage;
