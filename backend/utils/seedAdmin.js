import bcryptjs from 'bcryptjs';

import User from '../models/User.js';

export const seedAdmin = async () => {
  const email = process.env.ADMIN_EMAIL || 'admin@jbsonsenergy.com';
  const password = process.env.ADMIN_PASSWORD || 'adminPassword123';

  const existingAdmin = await User.findOne({ email });

  if (existingAdmin) {
    return existingAdmin;
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const admin = await User.create({
    name: 'JB & SONS POWER SOLUTIONS Admin',
    email,
    password: hashedPassword,
    role: 'admin',
  });

  return admin;
};
