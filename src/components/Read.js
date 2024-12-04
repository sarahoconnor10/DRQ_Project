import Animal from "./Animal";

const Read = () => {
    const animals = [
        {
            "Name": "Trixie",
            "Type": "Dog",
            "Age": "12"
        },
        {
            "Name": "Millie",
            "Type": "Dog",
            "Age": "8"
        }
    ];
    
    return (
        <div>
            <Animal animalData={animals}/>
        </div>
    )
}

export default Read;