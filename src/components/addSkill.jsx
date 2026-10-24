import{useState}  from  'react';
import  { FontAwesomeIcon }  from  '@fortawesome/react-fontawesome';
import  {faCirclePlus, faTrashCan}  from  '@fortawesome/free-solid-svg-icons';


export default function AddSkill  (){
    const [toggle, setToggle]  = useState(false);
    const [skills,  setSkills]= useState(["HTML/CSS", "Javascript"]);
    const [input, setInput] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            const cleanedInput= input.trim()
            if (cleanedInput === "" || skills.some((skill)=> skill.toLowerCase() === cleanedInput.toLowerCase())){return;}
            setSkills([...skills, cleanedInput]);
            setInput("");
            setToggle(false);
        }
    }
    
    const handleDelete = (skillToRemove) => {
        if (!isDeleting){return}

        setSkills(skills.filter((skill, index) => skill !== skillToRemove))
    }
    return(
        <>
        <button type="button" className="Skills" onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <button type="button" className="deleteSkill" onClick={() => setIsDeleting(!isDeleting)}> 
            <FontAwesomeIcon icon={faTrashCan} />
        </button> 
{/*!isDeleting makes this into a switch instead of a one way toggle it can toggle back and forth*/}
        {toggle &&<input type="text" className="teachSkillInput" placeholder="type skill..." onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)}/>}
        {skills.map((skill, index)=> (<span key={index} className="chip" onClick={() => handleDelete(skill) }>{isDeleting && "x "}{skill}</span>))}
        </>
    );
}