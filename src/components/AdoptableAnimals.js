// map each animal to form a list
import Animal from "./Animal";

const AdoptableAnimals = (props) => {
    return props.Animals.map(
        (tempAnimal) => {
            return <Animal 
                animal={tempAnimal} 
                key={tempAnimal._id} 
                Reload={props.ReloadData} 
            />
        }
    );
}

export default AdoptableAnimals;