const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const about = document.getElementById('about');
const website = document.getElementById('website');
const form = document.querySelector('.add-profile-form');
const successModal = document.querySelector('.success-modal');
const progressModal = document.querySelector('.progress-modal');

async function handleAddProfile(e) {
  e.preventDefault();
  progressModal.style.display = 'block';

  const profile = {
    fullName: fullName.value,
    email: email.value,
    about: about.value,
    website: website.value,
  };

  console.log(profile);

  const createdProfile = await axios.post(
    'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/create-profile',
    profile
  );

  if (
    createdProfile &&
    createdProfile.data.responseMessage === 'profile created successfully'
  ) {
    progressModal.style.display = 'none';
    successModal.style.display = 'block';

    fullName.value = '';
    email.value = '';
    about.value = '';
    website.value = '';

    setTimeout(() => {
      successModal.style.display = 'none';
      window.location.href = '../index.html';
    }, 2000);
  }
}

form.addEventListener('submit', handleAddProfile);
