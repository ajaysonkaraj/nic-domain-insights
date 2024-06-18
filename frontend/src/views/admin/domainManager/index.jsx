import Form from "./components/Form";

const Marketplace = () => {
  return (
    // <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        

        {/* NFt Header */}
        {/* <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending NFTs
          </h4>
          
        </div> */}
       <div >
       <Form />
       </div>
      </div>
    </div>
  );
};

export default Marketplace;
