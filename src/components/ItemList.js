const ItemList = ({ item }) => {
    const {
        name,
        description,
        price,
        defaultPrice,
        imageId
    } = item?.card?.info
    console.log(imageId);
    return (
        <div className="p-2 m-2 border-b-2 border-gray-200">
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span>{name}</span>
                 <p>₹{price ? price/100 : defaultPrice/100}</p>
                 <p className="text-xs text-left whitespace-break-spaces text-balance">{description}</p>
                </div>
                  <img
                 className="w-28"  
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imageId} />
            </div>
        </div>
    )
};

export default ItemList;