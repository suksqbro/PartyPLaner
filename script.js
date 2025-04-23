let guests = [];

function registerGuest() {
  const firstName = document.getElementById('guestFirstName').value.trim();
  const lastName = document.getElementById('guestLastName').value.trim();

  if (firstName && lastName) {
    guests.push({ firstName, lastName });
    updateGuestList();
    document.getElementById('guestFirstName').value = '';
    document.getElementById('guestLastName').value = '';
  } else {
    alert('Please enter both first and last names.');
  }
}

function updateGuestList() {
  const list = document.getElementById('guestList');
  list.innerHTML = '';
  guests.forEach((guest, index) => {
    const li = document.createElement('li');
    li.textContent = `${guest.firstName} ${guest.lastName}`;
    list.appendChild(li);
  });
}

function generateSummary() {
  const date = document.getElementById('partyDate').value;
  const time = document.getElementById('partyTime').value;
  const location = document.getElementById('partyLocation').value;
  const description = document.getElementById('partyDescription').value;
  const role = document.getElementById('myRole').value;
  const inviteMsg = document.getElementById('inviteMessage').value;

  const summary = `
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Organizer Role:</strong> ${role}</p>
    <p><strong>Invite Message:</strong><br>${inviteMsg}</p>
  `;

  document.getElementById('partySummary').innerHTML = summary;
}
