export interface CreateUserPayload {
  first_name: string;
  last_name: string;
  email_id: string;
  role: {
    id: string;
  };
  status: {
    id: string;
  };
  user_type: string;
  phone: string;
  time_zone: string;
  language: string;
  date_format: string;
  time_format: string;
  currency: string;
  profile_pic: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  notify: {
    email: string;
    mobile: string;
  };
  custom_fields: {
    [key: string]: any;
  };
}

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
  id: string;
}

export interface UserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email_id: string;
  role: {
    id: string;
    name: string;
  };
  status: {
    id: string;
    name: string;
  };
  user_type: string;
  phone: string;
  time_zone: string;
  language: string;
  date_format: string;
  time_format: string;
  currency: string;
  profile_pic: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  notify: {
    email: string;
    mobile: string;
  };
  custom_fields: {
    [key: string]: any;
  };
  created_date: string;
  modified_date: string;
}

export interface UserListParams {
  page: number;
  per_page: number;
  role_id?: string;
  status_id?: string;
  user_type?: string;
  search?: string;
}
