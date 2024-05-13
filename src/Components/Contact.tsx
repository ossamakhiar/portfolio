import { FormEvent } from "react";
import SocialIcons from "./utils/SocialIcons";
import { FaEnvelope } from "react-icons/fa";


const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message)
        return ;

    console.log(`dghI'm ${name} ${email} ${message}`)

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
        <div className="items-center mx-auto my-6 max-w-7xl" id="section-contact-me">
            <h1 className='mb-3 font-bold text-5xl text-center text-gray-900 dark:text-white'>Contact</h1>
            <h1 className="mx-5 mb-6 font-bold text-2xl text-blue-500">Connect with me</h1>
            <div className="flex md:flex-row flex-col justify-between items-stretch mx-5">
                <div className="w-full">
                    <form onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="full_name" className="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Your name</label>
                            <input type="text" name="name" id="full_name" className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border rounded-lg w-full text-gray-900 text-sm outline-none dark:placeholder-gray-400 dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Email address</label>
                            <input type="text" name="email" id="email" className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border rounded-lg w-full text-gray-900 text-sm outline-none dark:placeholder-gray-400 dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="block mb-2 font-medium text-gray-900 text-sm dark:text-white">Message</label>
                            <textarea id="message" name="message" className="block border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2.5 border rounded-lg w-full h-64 text-gray-900 text-sm outline-none dark:placeholder-gray-400 dark:text-white focus:ring dark:focus:ring-blue-500" placeholder="Enter your message" required />
                        </div>
                        <button type="submit" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-700 px-4 py-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 font-bold text-white">
                            Send
                            <FaEnvelope />
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center md:items-end mb-4 md:mb-0 w-full">
                    {/* <div className="flex flex-col md:items-end mb-8">
                        <h1 className="mb-3 font-bold text-3xl text-gray-900 dark:text-white">Oussama Khiar</h1>
                    </div> */}
                    <div className="flex flex-col items-center md:items-end mt-4 mb-8">
                        <h1 className="mb-3 font-bold text-3xl text-gray-900 dark:text-white">Email</h1>
                        <p className="text-2xl text-blue-700 text-bold">ossama.khiar@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <h1 className="font-bold text-3xl text-gray-900 dark:text-white">Social</h1>
                        <SocialIcons iconsSize={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;