import React from "react";
import "@testing-library/jest-dom";
import { screen, render, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Reminder from "./Reminder";

describe("Reminder", () => {
    it("should update activity and time when inputting", async () => {
      const { getByRole, getByTestId, getByText } = render(<Reminder />);
      const activityInput = getByTestId("activity-input");
      const timeInput = getByTestId("time-input");
        
      act(() => {
        userEvent.type(activityInput, "Go to gym");
        userEvent.type(timeInput,  "14:00");
      })

      expect(activityInput.value).toBe("Go to gym");
      expect(timeInput.value).toBe("14:00");
    
    
  
    })
  
    it("should remove all activities from the list when the remove button is clicked", async () => {
    
      const { getByRole, getByTestId, getByText } = render(<Reminder />);
      const activityInput = getByTestId("activity-input");
      const timeInput = getByTestId("time-input");
      const addButton = getByRole('button', {name: 'Add activity'});      

      act(() => {
        userEvent.type(activityInput, "study React");
        userEvent.type(timeInput,  "16:00");          
      })  
      
      act(() => {
        userEvent.click(addButton);     
      })

      const removeButton = getByRole('button', {name: 'Remove activities'})

      act(() => {
        userEvent.click(removeButton);
      })
      
  
      const activityItems = queryByText(/study React/i);
      expect(activityItems).not.toBeInTheDocument();
      const timeItems = queryByText(/16:00/i);
      expect(timeItems).not.toBeInTheDocument();
    })
  
    it("displays a modal when the reminder time is reached", async () => {
      jest.useFakeTimers();
  
      const { getByLabelText, getByText, queryByText, getByRole } = render(<Reminder />);
      const activityInput = getByLabelText(/activity/i);
      const timeInput = getByLabelText(/time/i);
      const addButton = getByRole('button', {name: 'Add activity'}); 
  
      act(() => {
        userEvent.type(timeInput, "14:00");
        userEvent.click(addButton);
      })
     
  
      expect(queryByText(/it's time to/i)).not.toBeInTheDocument();
  
      jest.advanceTimersByTime(1000 * 60 * 60); // 1 hour
  
      const reminderModal = getByText(/it's time to/i);
      expect(reminderModal).toBeInTheDocument();
  
      jest.useRealTimers();
    })

  })