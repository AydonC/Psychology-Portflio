import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingForm.css";
import pic from './assets/pic.jpg'

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [duration, setDuration] = useState(30);
  const [price, setPrice] = useState(0);
  const [bookedSlots, setBookedSlots] = useState({
    "2024-11-21": ["10:00 AM", "12:00 PM"],
    "2024-11-23": ["1:00 PM"],
  });
  
  // New state variables for name, surname, and email
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const pricing = {
    30: 400,
    45: 600,
    60: 850,
  };

  const availableTimeSlots = ["9:00 AM", "12:00 PM", "3:00 PM"];

  useEffect(() => {
    setPrice(pricing[duration]);
  }, [duration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateKey = selectedDate.toISOString().split("T")[0];
    if (bookedSlots[dateKey]?.includes(timeSlot)) {
      alert("This time slot is already booked. Please choose another.");
      return;
    }

    const updatedBookedSlots = { ...bookedSlots };
    if (!updatedBookedSlots[dateKey]) updatedBookedSlots[dateKey] = [];
    updatedBookedSlots[dateKey].push(timeSlot);

    setBookedSlots(updatedBookedSlots);

    alert(
      `Appointment booked for ${dateKey}, time: ${timeSlot}, duration: ${duration} minutes, price: R${price}. Name: ${name} ${surname}, Email: ${email}`
    );

    // Reset the form after submission
    setSelectedDate(null);
    setTimeSlot("");
    setDuration(30);
    setName("");
    setSurname("");
    setEmail("");
  };

  const isDateBooked = (date) => {
    const dateKey = date.toISOString().split("T")[0];
    return bookedSlots[dateKey]?.length === availableTimeSlots.length;
  };

  const isPastDate = (date) => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0);
  };

  const getTileClassName = ({ date }) => {
    const dateKey = date.toISOString().split("T")[0];
    let className = "";
    if (isPastDate(date)) className = "disabled-date";
    else if (isDateBooked(date)) className = "booked-date";
    else className = "available-date";

    // Highlight the selected date
    if (selectedDate && dateKey === selectedDate.toISOString().split("T")[0]) {
      className += " selected-date";
    }

    return className;
  };

  const handleDateChange = (date) => {
    if (isPastDate(date)) return;
    setSelectedDate(date);
    setTimeSlot("");
  };

  const getTimeSlotLabel = (slot, isBooked) =>
    isBooked ? `${slot} (Already Booked)` : slot;

  return (
    <div className="pic">
  
      <div className="booking-form">
        <h2 className="heading2">Book a once off consultation</h2>
        <div className="legend">
        <div>
          <span className="legend-box booked"></span> Booked
        </div>
        <div>
          <span className="legend-box available"></span> Available
        </div>
      </div>
        <form onSubmit={handleSubmit}>
          <label>Select a Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={getTileClassName}
            tileDisabled={({ date }) => isPastDate(date)}
          />
          {selectedDate && (
            <>
              <label>Select Time Slot:</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
              >
                <option value="">-- Select Time Slot --</option>
                {availableTimeSlots.map((slot) => {
                  const dateKey = selectedDate.toISOString().split("T")[0];
                  const isBooked =
                    bookedSlots[dateKey]?.includes(slot) ?? false;
                  return (
                    <option key={slot} value={isBooked ? "" : slot} disabled={isBooked}>
                      {getTimeSlotLabel(slot, isBooked)}
                    </option>
                  );
                })}
              </select>
            </>
          )}
          <label>
            Select Duration:
            <select
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
            >
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </label>
          <p className="pr">Price: <strong>R{price}</strong></p>
          
          
          <label>First Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name:"
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Last Name:"
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br /> <br /> <br />
          
          <button type="submit" disabled={!selectedDate || !timeSlot || !name || !surname || !email}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
