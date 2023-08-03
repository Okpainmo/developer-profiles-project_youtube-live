import express from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/profile.js';

const router = express.Router();

// method 1: api link becomes "api/v1/profiles/<end point>" - my preferred method.

router.post('/create-profile', createProfile);
router.get('/get-all-profiles', getAllProfiles);
router.get('/get-profile/:id', getProfile);
router.patch('/update-profile/:id', updateProfile);
router.delete('/delete-profile/:id', deleteProfile);

// method 2: api link stays as "/api/v1/profiles" - only the request type(GET, POST, PATCH, DELETE) changes.

// router.route('/').post(createProfile).get(getAllProfiles);
// router.route('/:id').get(getProfile).patch(updateProfile).delete(deleteProfile);

export default router;
