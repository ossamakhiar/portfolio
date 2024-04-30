import SocialIcons from "./utils/SocialIcons";
import { FaEnvelope } from "react-icons/fa";


const sendEmail = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log(message, name, email);

    try {
      const response = await fetch('http://localhost:3000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send mail');
      }

      const data = await response.json();
      console.log('Mail sent successfully:', data);
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  };


const Contact = () => {
    return (
        <div className="mt-10 max-w-7xl mx-auto items-center" id="section-contact-me">
            <h1 className='text-5xl font-bold text-center mb-3 text-gray-900 dark:text-white'>Contact</h1>
            <h1 className="mx-5 text-2xl font-bold text-blue-500 mb-6">Connect with me</h1>
            <div className="flex justify-between items-stretch flex-col md:flex-row  mx-5">
                <div className="w-full">
                    <form onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" name="name" id="full_name" className="bg-gray-50 border outline-none w-full border-gray-300 text-gray-900 text-sm rounded-lg
                            block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="text" name="email" id="email" className="bg-gray-50 border outline-none w-full  border-gray-300 text-gray-900 text-sm rounded-lg
                            block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="john.doe@example.com" pattern=".+@example\.com"  required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message" name="message" className=" h-64 bg-gray-50 border outline-none w-full border-gray-300 text-gray-900 text-sm rounded-lg
                            block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="Enter your message" required />
                        </div>
                        <button type="submit" className="gap-2 flex items-center bg-blue-500 rounded-lg hover:bg-blue-700
                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4">
                            Send
                            <FaEnvelope />
                        </button>
                    </form>
                </div>
                <div className="w-full flex flex-col md:items-end items-center mb-4 md:mb-0">
                    {/* <div className="flex flex-col md:items-end mb-8">
                        <h1 className="text-gray-900 dark:text-white font-bold text-3xl mb-3">Oussama Khiar</h1>
                    </div> */}
                    <div className="flex flex-col md:items-end mb-8 mt-4 items-center">
                        <h1 className="text-gray-900 dark:text-white font-bold text-3xl mb-3">Email</h1>
                        <p className="text-bold text-blue-700 text-2xl">ossama.khiar@gmail.com</p>
                    </div>
                    <div className="flex flex-col md:items-end items-center">
                        <h1 className="text-gray-900 dark:text-white font-bold text-3xl">Social</h1>
                        <SocialIcons iconsSize={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;