import Animal from "./Animal";

const AdoptableAnimals = (props) => {
    if (!props.Animals || props.Animals.length === 0) {
        return <div><h4>No adoptable animals found.</h4></div>
    }

    return (
        <div className="bg">
            <div className="p-2" >
                <h1>Adoptable Animals</h1>
                <hr />
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0.5rem"
                }}>

                {props.Animals.map((tempAnimal) => (
                    <Animal
                        animal={tempAnimal}
                        key={tempAnimal._id}
                        Reload={props.ReloadData}
                    />
                ))}
            </div>
        </div>
    );
}

export default AdoptableAnimals;