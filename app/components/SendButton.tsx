import { FC } from "react";
import emailjs from "@emailjs/browser";
import { Participant } from "./Participants"

type ParticipantComplete = {
    name: string,
    email: string,
    topic: string,
}

const SendButton: FC<{participants: Array<Participant>, topicList: Array<string>}> = 
({
    participants,
    topicList
}) =>
{
    const shuffle = (array: Array<any>) => {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }

    const sendEmail = () => {
        const participantsCopy = Array.from(participants);
        const topicListCopy = Array.from(topicList);
        shuffle(participantsCopy);
        shuffle(topicListCopy);

        participantsCopy.forEach((participant, key) => {
            const params = {
                name: participant.name,
                email: participant.email,
                country: topicListCopy[key],
            }
             setTimeout(async () => {
                console.log("Sending email to: " + participant.email);
                await emailjs.send("SERVICE_ID", "TEMPLATE_ID", params, { publicKey: "PUBLIC_KEY"}).then(
                    () => { console.log("Email sent to: " + participant.email); }
                );
            }, 1200*key);
            
        });
        

    }
    return (<button onClick={sendEmail} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>);
};

export default SendButton;