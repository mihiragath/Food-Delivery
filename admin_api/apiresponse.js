const messages = {
    english: {
      error: 'Something went wrong.',
      success: 'Success.',
      auth_fail: 'Authentication failed.',
      login_success: 'You are logged in successfully.',
      email_pass_match_err: 'Whoops! The Email & Password don\'t match.',
      updated_succ: '## updated successfully.',
      fetched_succ: '## fetched successfully.',
      sent_succ: '## sent successfully.',
      try_again: 'Please try again.',
      wrong_with: 'Something went wrong with ##.',
      must_between: 'Choose ## between ###.',
      cannot_be: '## cannot be ###.',
      not_allowed_in: '## not allowed in ###.',
      required: '## is required.',
      auth_failed: 'Please enter a valid credentials.',
      login_limit_reached: 'You have exhausted the limit for entering wrong details.Please try after some time',
      user_blocked: 'You are blocked by our system. Contact administrator for more details.',
      email_exists: 'Enter email already exist.Try different email address',
      phone_exists: 'Enter phone number already exist. Try different phone number',
      metamask_id_exists: 'Enter Metamask ID already exist. Try different Metamask ID',
      phone_not_verified: 'Phone Number not verified.',
      username_exists: 'Enter username already exist. Try different username',
      invalid_data: 'Invalid Data',
      address_not_found: 'Address Not Found',
      no_data_found: 'No data found.',
      admin_block: 'You are inactive by admin contact admin for more information',
      logout_success: 'Logout Success.',
      feedback_received: 'Feedback Received.',
      email_sent: 'Please check your mailbox. We send mail successfully',
      old_pass_err: 'Please enter a valid old password.',
      pass_change_succ: 'Password changed successfully.',
      phone_not_found: 'No data found with this phone in our system.',
      member_not_found: 'Member not found.',
      phone_verify_success: 'Phone verified successfully.',
      not_enough_cash: 'You can not join this contest due to insufficient balance.',
      is_force_update: 'You need to update your application.',
      is_updated: 'Your app is updated.',
      invalid_credential: 'Your request was made with invalid credentials.',
      user_not_found: 'User not found.',
      password_required: 'Password is required.',
      update_profile_success: 'Profile updated successfully.',
      item_created: 'item created successfully.',
      item_updated: 'item updated successfully.',
      missing_fields: 'Some required fields are missing.'
    }
  }
  
  const status = {
    OK: 200,
    Create: 201,
    Deleted: 204,
    BadRequest: 400,
    Unauthorized: 401,
    NotFound: 404,
    Forbidden: 403,
    NotAcceptable: 406,
    ExpectationFailed: 417,
    Locked: 423,
    InternalServerError: 500,
    TooManyRequest: 429
  }
  
  const jsonStatus = {
    OK: 200,
    Create: 201,
    Deleted: 204,
    BadRequest: 400,
    Unauthorized: 401,
    NotFound: 404,
    Forbidden: 403,
    NotAcceptable: 406,
    ExpectationFailed: 417,
    Locked: 423,
    InternalServerError: 500,
    TooManyRequest: 429
    
  }
  
  module.exports = {
    messages,
    status,
    jsonStatus,
  }