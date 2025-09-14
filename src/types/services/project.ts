export interface CreateProjectPyload {
  name: string;
  description: string;
  project_type: string;
  owner: {
    zpuid: string;
  };
  is_public_project: string;
  start_date: string;
  end_date: string;
  status: {
    id: string;
  };
  layout: {
    id: string;
  };
  added_via: string;
  is_rollup_project: string;
  budget_info: {
    billing_method: string;
    budget_type: string;
    tracking_method: string;
    currency: string;
    cost_budget: {
      amount: string;
    };
    hourly_budget: string;
    rate_per_hour: {
      amount: string;
    };
    budget_threshold: {
      amount: string;
    };
    hourly_budget_threshold: string;
    fixed_cost: {
      amount: string;
    };
    cost_per_hour: {
      amount: string;
    };
    revenue_budget: {
      amount: string;
    };
  };
  project_group: {
    id: string;
  };
  sub_module_settings: string;
  tags: {
    add: { id: string }[];
    remove: { id: string }[];
    id: string;
  }[];
  copy_from: string;
}
