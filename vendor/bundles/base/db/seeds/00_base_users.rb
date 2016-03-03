#encoding: utf-8 

User.current_user = User.where(login: 'admin').first_or_create(
  name: 'Admin', 
  email: 'admin@example.com', 
  password: 'admin', 
  password_confirmation: 'admin',
  admin_flag: true,
  timezone: 'Seoul', 
  locale: 'en-US'
)

User.where(login: 'manager').first_or_create(
  name: 'Manager', 
  email: 'manager@example.com', 
  password: 'manager', 
  password_confirmation: 'manager',
  admin_flag: true,
  timezone: 'Seoul', 
  locale: 'en-US'
)

User.where(login: 'planner').first_or_create(
  name: 'Planner', 
  email: 'planner@example.com', 
  password: 'planner', 
  password_confirmation: 'planner',
  admin_flag: true,
  timezone: 'Seoul', 
  locale: 'en-US'
)

User.where(login: 'tester').first_or_create(
  name: 'Tester', 
  email: 'tester@example.com', 
  password: 'tester', 
  password_confirmation: 'tester',
  admin_flag: true,
  timezone: 'Seoul', 
  locale: 'en-US'
)

User.where(login: 'operator').first_or_create(
  name: 'Operator', 
  email: 'operator@example.com', 
  password: 'operator', 
  password_confirmation: 'operator',
  timezone: 'Seoul', 
  locale: 'en-US',
  operator_flag: true
)