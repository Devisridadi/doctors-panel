// Simulating the doctor's availability for the next few days
const availableTimeSlots = [
    { date: "January 25, 2025", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    { date: "January 26, 2025", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
    { date: "January 27, 2025", slots: ["9:30 AM", "1:00 PM", "3:30 PM"] },
];

// Function to display the time slots
const timeSlotsList = document.getElementById('timeSlotsList');

availableTimeSlots.forEach((day) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${day.date}:</strong> ${day.slots.join(', ')}`;
    timeSlotsList.appendChild(listItem);
});

// Function to handle the "Make Appointment" button click
document.getElementById('makeAppointmentBtn').addEventListener('click', () => {
    alert("Appointment booking page (Mocked).");
});
