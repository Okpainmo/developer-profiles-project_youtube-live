const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.update-profile-form');
const successModal = document.querySelector('.success-modal');
const progressModal = document.querySelector('.progress-modal');

const urlParams = window.location.search;
const id = new URLSearchParams(urlParams).get('id');

async function handleGetProfile() {
  const url = `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-profile/${id}`;
  const response = await fetch(url);
  const profileToUpdate = await response.json();

  if (
    profileToUpdate &&
    profileToUpdate.responseMessage === 'profile fetched successfully'
  ) {
    fullName.value = profileToUpdate.profile.fullName;
    email.value = profileToUpdate.profile.email;
    about.value = profileToUpdate.profile.about;
    website.value = profileToUpdate.profile.website;
  } else {
    alert(
      'The requested profile could not be fetched, please check your network and try again'
    );
  }
}

handleGetProfile();

async function handleUpdateProfile(e) {
  e.preventDefault();
  progressModal.style.display = 'block';

  const update = {
    fullName: fullName.value,
    email: email.value,
    about: about.value,
    website: website.value,
  };

  const updatedProfile = await axios.patch(
    `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/update-profile/${id}`,
    update
  );

  if (
    updatedProfile &&
    updatedProfile.data.responseMessage === 'profile updated successfully'
  ) {
    progressModal.style.display = 'none';
    successModal.style.display = 'block';
    setTimeout(() => {
      successModal.style.display = 'none';
      window.location.href = '../index.html';
    }, 2000);
  }
}

form.addEventListener('submit', handleUpdateProfile);
