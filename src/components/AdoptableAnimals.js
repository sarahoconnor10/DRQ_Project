// map each animal to form a list
import Animal from "./Animal";

const AdoptableAnimals = (props) => {
    if (!props.Animals || props.Animals.length === 0) {
        return <h4>No adoptable animals found.</h4>
    }

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem"
            }}
        >
            {props.Animals.map((tempAnimal) => (
                <Animal
                    animal={tempAnimal}
                    key={tempAnimal._id}
                    Reload={props.ReloadData}
                />
            ))}
        </div>
    );
}

export default AdoptableAnimals;