const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic Information
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileUrl:{
    type: String,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant', // Reference to the restaurant that owns the category
  },

  // Other Information
  role: {
    type: String,
    enum: ['admin', 'restaurant_owner', 'waiter', 'chef', 'cashier', 'manager'],
    default: 'restaurant_owner',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isVerifed: {
    type: Boolean,
    default: false,
  },
  // Add more fields as needed for user preferences, access control, or other relevant data.

  // Timestamps
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
