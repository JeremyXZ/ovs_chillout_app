import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import { Howl } from "howler"

Modal.setAppElement("#root")

function Reminder() {
  const [activities, setActivities] = useState([])
  const [time, setTime] = useState("")
  const [showReminder, setShowReminder] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const checkTime = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-UK", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })

      if (currentTime === time) {

        const sound = new Howl({
          src: ['./chine.wav'],
          volume: 0.5
        })
        console.log("audio object", sound)

        sound.onerror = (error) => {
          console.error('Failed to play audio:', error)
        }
        
        console.log("Reminder: " + activities.join(", "))

        sound.play();
        setMessage("Reminder: " + activities.join(", "))
        setShowReminder(true);
      }
    }, 1000);




    return () => clearInterval(checkTime);
  }, [activities, time]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivities((prevActivities) => [...prevActivities, e.target.activity.value]);
    setTime(e.target.time.value);
  };

  const removeActivities = () => {
    setActivities([]);
    setTime("");
    setMessage("");
    setShowReminder(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="activity">Activity:</label>
        <input type="text" name="activity" />
        <label htmlFor="time">Time (24-hour format):</label>
        <input type="text" name="time" placeholder="15:38" />
        <button type="submit">Add activity</button>
        <button onClick={removeActivities}>Remove activities</button>
      </Form>
      {activities.length !== 0 && (
        <div className="reminder">
          <h3>Reminder:</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                {activity} at {time}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Modal
        isOpen={showReminder}
        onRequestClose={() => setShowReminder(false)}
        contentLabel="Reminder Modal"
      >
        <h3>{message}</h3>
        <button onClick={() => setShowReminder(false)}>Close</button>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8px;
  gap: 5px 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3px;

  & > * {
    max-width: 100px;
    max-height: 100px;
    padding: 5px 15px;
    font-size: 12px;
  }
`;

export default Reminder;

