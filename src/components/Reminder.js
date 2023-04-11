import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import reminderSign from '../images/timeToDo.jpeg'

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

      if (currentTime === `${time}:00`) {
       
        setMessage(activities.join(", "))
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
        <Text>
          <h3>Reminder:</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                {activity} at {time}
              </li>
            ))}
          </ul>
        </Text>
      )}
      <Modal
        isOpen={showReminder}
        onRequestClose={() => setShowReminder(false)}
        contentLabel="friendly reminder"
        
      >
        <h3>It's time to ....</h3>
        <p>{message}</p>
        <img src={reminderSign} alt="reminder sign"/>
        <button onClick={() => setShowReminder(false)}>Close</button>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: flext-start;
  padding: 0 8px;
  flex-grow: 1;
  gap: 33px;
`;

const Form = styled.form`
  width: 180px;
  height: 160px;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  gap: 6px;

  & button {
    border-radius: 8px;
    background-color: rgb(180, 224, 76);
    cursor: pointer; 
  }
`;

const Text = styled.div`
  height: 160px;     
  max-height: 100px;
  padding: 0 15px;
  margin-top: 0;
  font-size: 14px; 
  display: flex;
  flex-direction: column; 

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    margin-left: 0;
    margin-top: 8px;
    text-indent: 0;
  }


  & h3 + ul li: before {
    content: "•";
    margin-right: 0.5em;

  }

  h3 {
    display: block;
    padding: 0;
    margin: 0;
  }
`
export default Reminder;

