import Card from "./Card";

interface Props{
    items: string[]
}

function CardListGroup({items}:Props){
    return <div className="flex ">
    <div className="d-flex flex-wrap">
      {items.map((imageUrl, index) => (
        <Card
          key={index}
          title={`Movie Title ${index + 1}`}
          content={`Description for movie ${index + 1}`}
          image={imageUrl}
        />
      ))}
    </div>
  </div>;
}

export default CardListGroup;