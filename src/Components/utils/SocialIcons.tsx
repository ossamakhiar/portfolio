import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import codeforcesIcon from "/codeforces.svg"
import { FaDiscord } from "react-icons/fa";


const SocialIcons = ({iconsSize} : {iconsSize: number}) => {
    return (
        <div className="flex gap-3 md:gap-5 mt-3">
            <a href="https://codeforces.com/profile/ossamakhiar" className="hover:scale-125 transition duration-300"><img src={codeforcesIcon} width={30}/></a>
            <a href="https://github.com/ossamakhiar" className="hover:scale-125 transition duration-300"><BsGithub size={iconsSize}/></a>
            <a href="https://www.linkedin.com/in/oussama-khiar/" className="hover:scale-125 transition duration-300"><BsLinkedin size={iconsSize} fill="#0077B5"/></a>
            <a href="https://stackoverflow.com/users/17616522/oussama-khiar" className="hover:scale-125 transition duration-300"><BsStackOverflow size={iconsSize} fill="#F47F24"/></a>
            <a href="https://stackoverflow.com/users/17616522/oussama-khiar" className="hover:scale-125 transition duration-300"><FaDiscord size={iconsSize} fill="#7289da"/></a>
        </div>
    )
}

export default SocialIcons;