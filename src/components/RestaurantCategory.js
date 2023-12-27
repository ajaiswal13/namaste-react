import ItemList from "./ItemList";
const RestaurantCategory = ({ category, show, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    const {
        title,
        itemCards
    } = category;
    return (
        <div>
            <div className="mx-auto my-10 shadow-lg bg-gray-100 w-6/12 p-5">
                <div className="flex justify-between pb-5" onClick={handleClick}>
                     <span className="font-bold text-lg">{title}  ({itemCards?.length})</span>
                     <span>{show ? "⬆️" : "⬇️"}</span>
                </div>
                <div>
                    {show && itemCards.map(item => <ItemList item={item} />)}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCategory;